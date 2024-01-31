package com.student.management.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Result {
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne()
    @JoinColumn(name = "course_id", insertable = false, updatable = false)
    private Course course;
    @ManyToOne()
    @JoinColumn(name = "course_id", insertable = false, updatable = false)
    private Student student;
    private String grade;

}
