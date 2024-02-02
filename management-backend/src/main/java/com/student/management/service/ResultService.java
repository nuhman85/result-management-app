package com.student.management.service;

import com.student.management.entity.Course;
import com.student.management.entity.Student;
import com.student.management.model.Result;
import com.student.management.model.ResultResponse;
import com.student.management.repository.CourseRepository;
import com.student.management.repository.ResultRepository;
import com.student.management.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResultService {
    @Autowired
    private ResultRepository resultRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private StudentRepository studentRepository;

    public List<ResultResponse> findAllResults() {
        return resultRepository.findAll().stream()
                .map(result -> {
                    ResultResponse result1 = new ResultResponse();
                    result1.setId(result.getId());
                    result1.setStudentId(result.getStudent().getId());
                    result1.setStudentName(result.getStudent().getFirstName()+" "+result.getStudent().getFamilyName());
                    result1.setCourseId(result.getCourse().getId());
                    result1.setCourseName(result.getCourse().getName());
                    result1.setGrade(result.getGrade());
                    return result1;
                }).collect(Collectors.toList());
    }

    public Result addResult(Result result) {
        com.student.management.entity.Result result1 = new com.student.management.entity.Result();
        result1.setGrade(result.getGrade().toString());
        Optional<Course> course = courseRepository.findById(result.getCourseId());
        Optional<Student> student = studentRepository.findById(result.getStudentId());
        if (!course.isPresent() || !student.isPresent()) {
            throw new RuntimeException("course or Student not found");
        }
        result1.setStudent(student.get());
        result1.setCourse(course.get());
        com.student.management.entity.Result result2 = resultRepository.save(result1);
        result.setId(result2.getId());
        return result;
    }

    public String deleteResult(Long resultId) {
        Optional<com.student.management.entity.Result> result1 = resultRepository.findById(resultId);
        if (!result1.isPresent()) {
            throw new RuntimeException("Result not found");
        }
        resultRepository.deleteById(resultId);
        return "Result Deleted Successfully";
    }


}
