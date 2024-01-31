package com.student.management.service;

import com.student.management.model.Course;
import com.student.management.model.Result;
import com.student.management.model.Student;
import com.student.management.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResultService {
    @Autowired
    private ResultRepository resultRepository;

    public List<Result> findAllResults(){
        return resultRepository.findAll().stream()
                .map(result -> {
                    Result result1 = new Result();
                    result1.setId(result.getId());
                    result1.setStudent(new Student(result.getStudent().getId(),
                            result.getStudent().getFirstName(),
                            result.getStudent().getFamilyName(),
                            result.getStudent().getDateOfBirth(),
                            result.getStudent().getEmail()));
                    result1.setCourse(new Course(result.getCourse().getId(),
                            result.getCourse().getName()));
                    return result1;
                }).collect(Collectors.toList());
    }


}
