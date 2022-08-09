package miu.edu.alumnitrackingsystem.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miu.edu.alumnitrackingsystem.entity.Job;
import miu.edu.alumnitrackingsystem.util.UserType;

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
    private List<JobDto> jobs;

    public UserType userType;
}
