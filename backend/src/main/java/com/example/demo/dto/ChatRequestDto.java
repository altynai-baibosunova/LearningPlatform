package com.example.demo.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Request DTO for sending a chat message.
 * sessionId may be null if user starts a new conversation.
 */

@Getter @Setter @NoArgsConstructor
public class ChatRequestDto {
    private String message;
    private Long sessionId; // null = new session

}

//@Getter
//@Setter
//@NoArgsConstructor
//public class ChatRequestDto {
//    private String message;
//    private Long sessionId; // null = create new session
//}
