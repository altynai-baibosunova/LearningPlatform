package com.example.demo.service;

import com.example.demo.model.ChatMessage;
import com.example.demo.model.ChatSession;
import com.example.demo.repository.ChatMessageRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Component
public class AIClient {

    @Value("${OPENAI_API_KEY}")
    private String apiKey;

    private final ChatMessageRepository messageRepo;
    private final WebClient webClient;

    public AIClient(ChatMessageRepository messageRepo) {
        this.messageRepo = messageRepo;
        this.webClient = WebClient.builder().build();
    }

    @PostConstruct
    public void checkKey() {
        System.out.println("OPENAI_API_KEY loaded = " + (apiKey != null));
    }

    public String getAIReply(ChatSession session) {

        List<ChatMessage> messages =
                messageRepo.findBySessionOrderByTimestampAsc(session);

        int start = Math.max(0, messages.size() - 10);

        StringBuilder prompt = new StringBuilder();
        for (int i = start; i < messages.size(); i++) {
            ChatMessage msg = messages.get(i);
            prompt.append(msg.getSender())
                    .append(": ")
                    .append(msg.getContent())
                    .append("\n");
        }

        String response = webClient.post()
                .uri("https://api.openai.com/v1/chat/completions")
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .bodyValue("""
                    {
                      "model": "gpt-3.5-turbo",
                      "messages": [
                        {"role": "user", "content": "%s"}
                      ]
                    }
                    """.formatted(prompt.toString().replace("\"", "\\\"")))
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return response != null ? response : "AI did not respond";
    }
}
