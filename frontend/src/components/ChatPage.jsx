import React, { useState } from "react";
import SectionsSidebar from "./SectionsSidebar";

const sectionsList = [
  { id: 1, title: "Week 1 - Java Fundamentals" },
  { id: 2, title: "Week 2 - OOP in Java" },
  { id: 3, title: "Week 3 - Collections Framework" },
  // ... add more sections
];

export default function ChatPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [conversations, setConversations] = useState({});
  // conversations = { sectionId: [{role: 'user/ai', text: '...'}] }

  const handleSelectSection = (section) => {
    setActiveSection(section);
    if (!conversations[section.id]) {
      setConversations(prev => ({ ...prev, [section.id]: [] }));
    }
  };

  const handleSendMessage = async (message) => {
    if (!activeSection) return;

    const sectionId = activeSection.id;

    // Add user message
    setConversations(prev => ({
      ...prev,
      [sectionId]: [...(prev[sectionId] || []), { role: "user", text: message }],
    }));

    // Call AI API (mocked here)
    const aiResponse = await fakeChatGptResponse(activeSection.title, message);

    setConversations(prev => ({
      ...prev,
      [sectionId]: [...(prev[sectionId] || []), { role: "ai", text: aiResponse }],
    }));
  };

  const currentConversation = activeSection ? conversations[activeSection.id] || [] : [];

  return (
    <div className="chat-container">
      <SectionsSidebar
        sections={sectionsList}
        onSelectSection={handleSelectSection}
        activeSection={activeSection}
      />

      <div className="chat-main">
        <h2>{activeSection ? activeSection.title : "Select a section"}</h2>
        <div className="conversation">
          {currentConversation.map((msg, index) => (
            <div key={index} className={msg.role}>
              {msg.text}
            </div>
          ))}
        </div>
        {activeSection && (
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your question..."
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage(e.target.value);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Mock AI response
async function fakeChatGptResponse(sectionTitle, message) {
  return `Response for "${sectionTitle}": ${message}`;
}
