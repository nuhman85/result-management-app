package com.student.management.controller;

import com.student.management.model.Student;
import com.student.management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;
    @PostMapping(path = "/addstudent")
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }

    @GetMapping(path = "/student")
    public List<Student> getStudents(){
        return studentService.getAllStudents();
    }

    @DeleteMapping(path = "/student/{id}")
    public String deleteStudent(@PathVariable @NonNull Long id) throws Exception {
        return studentService.deleteStudent(id);
    }
}
