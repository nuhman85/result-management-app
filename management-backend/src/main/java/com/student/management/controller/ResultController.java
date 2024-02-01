package com.student.management.controller;

import com.student.management.model.Course;
import com.student.management.service.CourseService;
import com.student.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;
    @PostMapping(path = "/addcourse")
    public Course addStudent(@RequestBody Course course){
        return courseService.addCourse(course);
    }

    @GetMapping(path = "/course")
    public List<Course> getStudents(){
        return courseService.getAllCourses();
    }

    @DeleteMapping(path = "/course/{id}")
    public String deleteStudent(@PathVariable @NonNull Long id) {
        return courseService.deleteCourse(id);
    }
}
