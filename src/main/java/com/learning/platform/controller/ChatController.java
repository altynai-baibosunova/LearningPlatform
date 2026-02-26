package com.learning.platform.controller;

import com.learning.platform.dto.ChatRequestDto;
import com.learning.platform.dto.ChatResponseDto;
import com.learning.platform.dto.ConversationDetailDto;
import com.learning.platform.dto.ConversationListDto;
import com.learning.platform.config.SecurityUtil;
import com.learning.platform.service.api.ChatService;
import com.learning.platform.service.api.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:3000")
public class ChatController {

    private final ChatService chatService;
    private final UserService userService;

    public ChatController(ChatService chatService, UserService userService) {
        this.chatService = chatService;
        this.userService = userService;
    }

    @PostMapping("/message")
    public ResponseEntity<ChatResponseDto> sendMessage(@RequestBody ChatRequestDto request) {

        String username = SecurityUtil.getAuthenticatedUsername();
        UUID userId = userService.getUserIdByUsername(username);

        ChatResponseDto response = chatService.processChat(userId, request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/conversations")
    public ResponseEntity<List<ConversationListDto>> getConversations(
            @RequestParam(required = false) UUID sectionId
    ) {
        String username = SecurityUtil.getAuthenticatedUsername();
        UUID userId = userService.getUserIdByUsername(username);

        List<ConversationListDto> conversations = (sectionId == null)
                ? chatService.getConversations(userId)
                : chatService.getConversations(userId, sectionId);

        return ResponseEntity.ok(conversations);
    }

    @GetMapping("/conversations/{conversationId}")
    public ResponseEntity<ConversationDetailDto> getConversationDetail(
            @PathVariable UUID conversationId) {

        String username = SecurityUtil.getAuthenticatedUsername();
        UUID userId = userService.getUserIdByUsername(username);

        ConversationDetailDto detail =
                chatService.getConversationDetail(userId, conversationId);

        return ResponseEntity.ok(detail);
    }

    @DeleteMapping("/conversations/{conversationId}")
    public ResponseEntity<Void> deleteConversation(@PathVariable UUID conversationId) {

        String username = SecurityUtil.getAuthenticatedUsername();
        UUID userId = userService.getUserIdByUsername(username);

        chatService.deleteConversation(userId, conversationId);
        return ResponseEntity.noContent().build();
    }
}
