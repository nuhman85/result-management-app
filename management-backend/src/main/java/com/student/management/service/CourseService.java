package com.student.management.service;

import com.student.management.model.Course;
import com.student.management.repository.CourseRepository;
import com.student.management.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ResultRepository resultRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll()
                .stream()
                .map(course -> {
                    Course courses = new Course();
                    courses.setId(course.getId());
                    courses.setName(course.getName());
                    return courses;
                }).collect(Collectors.toList());
    }

    public Course addCourse(Course course) {
        com.student.management.entity.Course course1 = new com.student.management.entity.Course();
        course1.setName(course.getName());
        com.student.management.entity.Course course2 = courseRepository.save(course1);
        course.setId(course2.getId());
        return course;
    }

    public String deleteCourse(Long id) throws RuntimeException {
        Optional<com.student.management.entity.Course> course = courseRepository.findById(id);
        if (!course.isPresent()) {
            throw new RuntimeException("Course not found");
        }

        resultRepository.findAllByCourse(course.get()).forEach(x-> resultRepository.delete(x));
        courseRepository.deleteById(id);
        return "Course Deleted Successfully";
    }
}
