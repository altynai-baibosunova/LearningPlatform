package com.example.demo.service;

import com.example.demo.dto.ChatRequestDto;
import com.example.demo.dto.ChatResponseDto;
import com.example.demo.model.ChatMessage;
import com.example.demo.model.ChatSession;
import com.example.demo.model.SenderRole;
import com.example.demo.repository.ChatMessageRepository;
import com.example.demo.repository.ChatSessionRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

/**
 * ChatServiceImpl handles chat logic between the controller
 * and the external AI client (GeminiClientService).
 */
@Service
public class ChatServiceImpl implements ChatService {

    private final AIClient aiClient;
    private final ChatSessionRepository chatSessionRepository;
    private final ChatMessageRepository chatMessageRepository;

    public ChatServiceImpl(AIClient aiClient,
                           ChatSessionRepository chatSessionRepository,
                           ChatMessageRepository chatMessageRepository) {
        this.aiClient = aiClient;
        this.chatSessionRepository = chatSessionRepository;
        this.chatMessageRepository = chatMessageRepository;
    }

    @Override
    public ChatResponseDto getChatResponse(ChatRequestDto request) {
        try {
            if (request.getMessage() == null || request.getMessage().trim().isEmpty()) {
                return new ChatResponseDto("Message cannot be empty.");
            }

            ChatSession session = getOrCreateSession(request.getSessionId());

            // Save user message
            ChatMessage userMessage = ChatMessage.builder()
                    .content(request.getMessage())
                    .sender(com.example.demo.model.SenderRole.USER)
                    .session(session)
                    .build();
            chatMessageRepository.save(userMessage);

            // Get AI response
            String aiReply = aiClient.getAIReply(session);
            if (aiReply == null || aiReply.trim().isEmpty()) {
                aiReply = "No response from AI.";
            }

            // Save AI message
            ChatMessage aiMessage = ChatMessage.builder()
                    .content(aiReply)
                    .sender(com.example.demo.model.SenderRole.AI)
                    .session(session)
                    .build();
            chatMessageRepository.save(aiMessage);

            return new ChatResponseDto(aiReply, session.getId());

        } catch (Exception e) {
            return new ChatResponseDto("Error: " + e.getMessage());
        }
    }

    private ChatSession getOrCreateSession(Long sessionId) {
        if (sessionId != null) {
            return chatSessionRepository.findById(sessionId)
                    .orElseGet(this::createNewSession);
        }
        return createNewSession();
    }

    private ChatSession createNewSession() {
        ChatSession session = ChatSession.builder()
                .title("New Chat")
                .build();
        return chatSessionRepository.save(session);
    }
}
