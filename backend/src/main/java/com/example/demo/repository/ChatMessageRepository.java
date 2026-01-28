package com.example.demo.repository;


import com.example.demo.model.ChatMessage;
import com.example.demo.model.ChatSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

    // Get all messages for a chat session
    List<ChatMessage> findBySessionOrderByTimestampAsc(ChatSession session);
}
