package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miu.edu.alumnitrackingsystem.entity.Comment;
import miu.edu.alumnitrackingsystem.util.UserType;

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

    public UserType userType;
    private String experience;
    public String major;
}
