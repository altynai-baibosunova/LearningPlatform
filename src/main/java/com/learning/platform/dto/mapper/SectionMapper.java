package com.learning.platform.dto.mapper;

import com.learning.platform.dto.SectionDto;
import com.learning.platform.model.Section;

import java.util.List;
import java.util.stream.Collectors;

public final class SectionMapper {

    private SectionMapper() {}

    public static SectionDto toDto(Section section) {
        if (section == null) {
            return null;
        }
        return new SectionDto(
                section.getId(),
                section.getTitle()
        );
    }

    public static List<SectionDto> toDtoList(List<Section> sections) {
        return sections.stream()
                .map(SectionMapper::toDto)
                .collect(Collectors.toList());
    }
}
