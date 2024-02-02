package com.student.management.repository;

import com.student.management.entity.Course;
import com.student.management.entity.Result;
import com.student.management.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {

    public List<Result> findAllByStudent(Student student);

    public List<Result> findAllByCourse(Course course);

    public void deleteByStudent(Student student);


}
