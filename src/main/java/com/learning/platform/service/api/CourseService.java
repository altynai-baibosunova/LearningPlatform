package com.learning.platform.service.api;

import com.learning.platform.model.Course;

import java.util.List;
import java.util.UUID;

public interface CourseService {

    List<Course> getAllCourses();

    Course getCourseById(UUID courseId);
}
