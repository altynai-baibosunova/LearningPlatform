package com.learning.platform.service.api;

import com.learning.platform.dto.ChatRequestDto;
import com.learning.platform.dto.ChatResponseDto;
import com.learning.platform.dto.ConversationDetailDto;
import com.learning.platform.dto.ConversationListDto;

import java.util.List;
import java.util.UUID;

public interface ChatService {

    ChatResponseDto processChat(UUID userId, ChatRequestDto request);

    List<ConversationListDto> getConversations(UUID userId);

    List<ConversationListDto> getConversations(UUID userId, UUID sectionId);

    ConversationDetailDto getConversationDetail(UUID userId, UUID conversationId);

    void deleteConversation(UUID userId, UUID conversationId);
}
