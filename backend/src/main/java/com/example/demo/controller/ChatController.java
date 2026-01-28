package com.example.demo.controller;

import com.example.demo.dto.ChatRequestDto;
import com.example.demo.dto.ChatResponseDto;
import com.example.demo.service.ChatService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ChatController handles chat messages between authenticated users
 * and the external AI service (e.g., Gemini API).
 */
@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/message")
    public ResponseEntity<ChatResponseDto> sendMessage(@RequestBody ChatRequestDto request) {
        ChatResponseDto response = chatService.getChatResponse(request);
        return ResponseEntity.ok(response);
    }
}
