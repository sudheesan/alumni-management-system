package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miu.edu.alumnitrackingsystem.entity.File;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDetailsDto {
    private int id;
    private String email;
    private String firstName;
    private String lastName;
    private float gpa;
    private String state;
    private String city;
    private List<JobDto> jobs;
    private List<JobDto> appliedJobs;
    private List<CommentDto> comments;

}
