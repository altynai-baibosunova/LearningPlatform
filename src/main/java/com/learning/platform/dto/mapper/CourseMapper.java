package com.learning.platform.dto.mapper;

import com.learning.platform.dto.CourseDto;
import com.learning.platform.model.Course;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Mapper for converting Course entities to CourseDto.
 */
public final class CourseMapper {

    private CourseMapper() {
        // Utility class, no instances allowed
    }
    public static CourseDto toDto(Course course) {
        if (course == null) {
            return null;
        }
        return new CourseDto(
                course.getId(),
                course.getTitle(),
                course.getDescription()
        );
    }
    public static List<CourseDto> toDtoList(List<Course> courses) {
        return courses.stream()
                .map(CourseMapper::toDto)
                .collect(Collectors.toList());
    }
}
