package com.learning.platform.service.impl;

import com.learning.platform.dto.*;
import com.learning.platform.model.*;
import com.learning.platform.repository.SectionRepository;
import com.learning.platform.repository.ConversationRepository;
import com.learning.platform.repository.MessageRepository;
import com.learning.platform.repository.UserRepository;
import com.learning.platform.service.OpenAiClientService;
import com.learning.platform.service.api.ChatService;
import com.learning.platform.service.api.MemoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final ConversationRepository conversationRepository;
    private final MemoryService memoryService;
    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final OpenAiClientService openAiClientService;
    private final SectionRepository sectionRepository;

    @Override
    public ChatResponseDto processChat(UUID userId, ChatRequestDto request) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Section section = sectionRepository.findById(request.getSectionId())
                .orElseThrow(() -> new RuntimeException("Section not found"));

        Conversation conversation;

        if (request.getConversationId() == null) {
            conversation = Conversation.builder()
                    .title("New chat")
                    .modelName(request.getModelName())
                    .user(user)
                    .section(section)
                    .build();
            conversation = conversationRepository.save(conversation);
        } else {
            UUID convId = request.getConversationId();
            conversation = conversationRepository.findByIdAndUserId(convId, userId)
                    .orElseThrow(() -> new RuntimeException("Conversation not found or access denied"));
        }

        Message userMessage = Message.builder()
                .conversation(conversation)
                .role(MessageRole.USER)
                .content(request.getMessage())
                .build();
        messageRepository.save(userMessage);

        memoryService.extractAndSave(userId, request.getMessage());

        List<Message> history =
                messageRepository.findByConversationIdOrderByCreatedAtAsc(conversation.getId());

        List<Map<String, String>> messages = new ArrayList<>();

        messages.add(Map.of(
                "role", "system",
                "content", "You are a helpful conversational assistant."
        ));

        String memoryPrompt = memoryService.buildMemoryPrompt(userId);
        if (!memoryPrompt.isBlank()) {
            messages.add(Map.of(
                    "role", "system",
                    "content", memoryPrompt
            ));
        }

        for (Message m : history) {
            messages.add(Map.of(
                    "role", m.getRole() == MessageRole.USER ? "user" : "assistant",
                    "content", m.getContent()
            ));
        }

        String aiReply = openAiClientService.generateResponse(messages);

        Message aiMessage = Message.builder()
                .conversation(conversation)
                .role(MessageRole.AI)
                .content(aiReply)
                .build();
        messageRepository.save(aiMessage);

        conversation.setUpdatedAt(java.time.LocalDateTime.now());
        conversationRepository.save(conversation);

        return ChatResponseDto.builder()
                .conversationId(conversation.getId())
                .conversationTitle(conversation.getTitle())
                .newConversation(request.getConversationId() == null)
                .response(aiReply)
                .timestamp(aiMessage.getCreatedAt())
                .build();
    }

    @Override
    public List<ConversationListDto> getConversations(UUID userId) {
        List<Conversation> conversations =
                conversationRepository.findByUserIdOrderByUpdatedAtDesc(userId);

        return conversations.stream()
                .map(conv -> ConversationListDto.builder()
                        .id(conv.getId())
                        .title(conv.getTitle())
                        .modelName(conv.getModelName())
                        .createdAt(conv.getCreatedAt())
                        .updatedAt(conv.getUpdatedAt())
                        .lastMessagePreview(getLastMessagePreview(conv.getId()))
                        .messageCount(getMessageCount(conv.getId()))
                        .build()
                )
                .toList();
    }

    @Override
    public List<ConversationListDto> getConversations(UUID userId, UUID sectionId) {
        List<Conversation> conversations =
                conversationRepository.findByUserIdAndSectionIdOrderByUpdatedAtDesc(userId, sectionId);

        return conversations.stream()
                .map(conv -> ConversationListDto.builder()
                        .id(conv.getId())
                        .title(conv.getTitle())
                        .modelName(conv.getModelName())
                        .createdAt(conv.getCreatedAt())
                        .updatedAt(conv.getUpdatedAt())
                        .lastMessagePreview(getLastMessagePreview(conv.getId()))
                        .messageCount(getMessageCount(conv.getId()))
                        .sectionId(conv.getSection().getId())
                        .build()
                )
                .toList();
    }

    private String getLastMessagePreview(UUID conversationId) {
        List<Message> messages =
                messageRepository.findByConversationIdOrderByCreatedAtAsc(conversationId);
        if (messages.isEmpty()) return "";
        Message last = messages.get(messages.size() - 1);
        return last.getContent().length() > 50
                ? last.getContent().substring(0, 50) + "..."
                : last.getContent();
    }

    private int getMessageCount(UUID conversationId) {
        return messageRepository
                .findByConversationIdOrderByCreatedAtAsc(conversationId)
                .size();
    }

    @Override
    public ConversationDetailDto getConversationDetail(UUID userId, UUID conversationId) {

        Conversation conversation = conversationRepository
                .findByIdAndUserId(conversationId, userId)
                .orElseThrow(() -> new RuntimeException("Conversation not found"));

        List<Message> messages =
                messageRepository.findByConversationIdOrderByCreatedAtAsc(conversationId);

        List<MessageDto> messageDtos = messages.stream()
                .map(msg -> MessageDto.builder()
                        .id(msg.getId())
                        .role(msg.getRole().name())
                        .content(msg.getContent())
                        .timestamp(msg.getCreatedAt())
                        .build()
                )
                .toList();

        return ConversationDetailDto.builder()
                .id(conversation.getId())
                .title(conversation.getTitle())
                .modelName(conversation.getModelName())
                .createdAt(conversation.getCreatedAt())
                .updatedAt(conversation.getUpdatedAt())
                .messages(messageDtos)
                .build();
    }

    @Override
    public void deleteConversation(UUID userId, UUID conversationId) {
        Conversation conversation = conversationRepository
                .findByIdAndUserId(conversationId, userId)
                .orElseThrow(() -> new RuntimeException("Conversation not found"));

        conversationRepository.delete(conversation);
    }
}
