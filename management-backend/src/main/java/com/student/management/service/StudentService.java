package com.student.management.service;

import com.student.management.entity.Result;
import com.student.management.model.Student;
import com.student.management.repository.ResultRepository;
import com.student.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ResultRepository resultRepository;

    public Student addStudent(Student student) {
        com.student.management.entity.Student student1 = new com.student.management.entity.Student();
        student1.setFirstName(student.getFirstName());
        student1.setFamilyName(student.getFamilyName());
        student1.setDateOfBirth(student.getDateOfBirth());
        student1.setEmail(student.getEmail());
        com.student.management.entity.Student student2 = studentRepository.save(student1);
        student.setId(student2.getId());
        return student;
    }


    public List<Student> getAllStudents() {
        return studentRepository.findAll().stream().map(student -> {
            Student student1 = new Student();
            student1.setId(student.getId());
            student1.setFirstName(student.getFirstName());
            student1.setFamilyName(student.getFamilyName());
            student1.setDateOfBirth(student.getDateOfBirth());
            student1.setEmail(student.getEmail());
            return student1;
        }).collect(Collectors.toList());
    }

    public String deleteStudent(Long studentId) throws RuntimeException {
        Optional<com.student.management.entity.Student> student = studentRepository.findById(studentId);
        if (!student.isPresent()) {
            throw new RuntimeException("Student not found");
        }
        resultRepository.findAllByStudent(student.get()).forEach(x->
                resultRepository.delete(x));
        studentRepository.delete(student.get());
        return "Student Deleted Successfully";
    }


}
