package com.student.management.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    @Nullable
    private Long id;
    private String firstName;
    private String familyName;
    @JsonFormat(pattern = "MM-dd-yyyy")
    @NonNull
    private LocalDate dateOfBirth;
    private String email;
}
