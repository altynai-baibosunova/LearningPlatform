package com.learning.platform.service;
import com.learning.platform.model.Message;
import com.learning.platform.model.Theme;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class ThemeManager {
    private Map<String, Theme> themes;

    public ThemeManager() {
        themes = new HashMap<>();
    }

    public void createTheme(String themeName) {
        themes.putIfAbsent(themeName, new Theme(themeName));
    }

    public Theme getTheme(String themeName) {
        return themes.get(themeName);
    }

    public List<Message> getAllHistory() {
        List<Message> allMessages = new ArrayList<>();
        for (Theme theme : themes.values()) {
            allMessages.addAll(theme.getHistory());
        }
        return allMessages;
    }

    public void addMessage(String themeName, Message msg) {
        createTheme(themeName);
        themes.get(themeName).addMessage(msg);
    }
}
