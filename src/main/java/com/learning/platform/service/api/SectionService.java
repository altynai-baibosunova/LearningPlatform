package com.learning.platform.service.api;

import com.learning.platform.model.Section;
import java.util.List;
import java.util.UUID;

public interface SectionService {

    List<Section> getSectionsByCourseId(UUID courseId);

    Section getSectionByIdForCourse(UUID courseId, UUID sectionId);
}
