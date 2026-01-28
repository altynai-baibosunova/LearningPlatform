package com.example.demo.repository;


import com.example.demo.model.ChatMessage;
import com.example.demo.model.ChatSession;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.User;

import java.util.List;
public interface ChatSessionRepository extends JpaRepository<ChatSession, Long> {}



//
//public interface ChatSessionRepository extends JpaRepository<ChatSession, Long> {
//
//    // Get all chat sessions for a specific user
//    List<ChatSession> findByUserOrderByCreatedAtDesc(User user);
//}
