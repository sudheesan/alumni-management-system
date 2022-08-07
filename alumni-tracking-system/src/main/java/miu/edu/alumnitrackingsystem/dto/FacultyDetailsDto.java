package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miu.edu.alumnitrackingsystem.entity.Job;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FacultyDetailsDto {
    private int id;
    private String email;
    private String firstName;
    private String lastName;
    private String department;
    private String state;
    private String city;
    private List<Job> jobs;
}
