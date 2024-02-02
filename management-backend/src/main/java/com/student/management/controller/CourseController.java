package com.student.management.controller;

import com.student.management.model.Course;
import com.student.management.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping(path = "/addcourse")
    @CrossOrigin(origins = "*")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @GetMapping(path = "/course")
    @CrossOrigin(origins = "*")
    public List<Course> getCourses() {
        return courseService.getAllCourses();
    }

    @DeleteMapping(path = "/course/{id}")
    @CrossOrigin(origins = "*")
    public String deleteCourse(@PathVariable @NonNull Long id) {
        return courseService.deleteCourse(id);
    }
}
