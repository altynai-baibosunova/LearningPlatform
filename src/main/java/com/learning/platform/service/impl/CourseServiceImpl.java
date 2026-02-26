package com.learning.platform.service.impl;

import com.learning.platform.exception.ResourceNotFoundException;
import com.learning.platform.exception.ResourceNotFoundException;
import com.learning.platform.model.Course;
import com.learning.platform.repository.CourseRepository;
import com.learning.platform.service.api.CourseService;
import lombok.RequiredArgsConstructor;
import com.learning.platform.model.Course;
import org.springframework.stereotype.Service;
import com.learning.platform.repository.CourseRepository;
import com.learning.platform.service.api.CourseService;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(UUID courseId) {
        return courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found: " + courseId));
    }
}
