package com.student.management.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResultResponse extends Result{
    private String studentName;
    private String courseName;
}
