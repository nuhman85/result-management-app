package com.student.management.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Result {
    private Long id;
    private Long courseId;
    private Long studentId;
    private String grade;
}
