package com.student.management.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Result {
    private Long id;
    private Course course;
    private Student student;
    private Grade grade;
}
