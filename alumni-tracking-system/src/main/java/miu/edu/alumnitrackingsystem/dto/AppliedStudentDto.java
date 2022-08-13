package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppliedStudentDto {
    private int id;
    private String email;
    private String firstName;
    private String lastName;
    private float gpa;
    private String state;
    private String city;
    private String cvUrl;
}
