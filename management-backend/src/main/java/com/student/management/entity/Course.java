package com.student.management.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
@Setter
@Getter
public class Course {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "name")
    private String name;

}
