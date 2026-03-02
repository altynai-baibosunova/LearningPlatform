.chat-app-container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  background: #f5f5f5;
  overflow-y: auto;
  border-right: 1px solid #ccc;
}

.sidebar-item {
  padding: 12px 16px;
  cursor: pointer;
}

.sidebar-item.active {
  background: #007bff;
  color: white;
}

.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: #f9f9f9;
}

.message {
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 60%;
}

.message.user {
  background: #dcf8c6;
  align-self: flex-end;
}

.message.ai {
  background: #fff;
  align-self: flex-start;
}

.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background: #eee;
}

.chat-input input {
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-right: 8px;
}

.chat-input button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: white;
  cursor: pointer;
}
