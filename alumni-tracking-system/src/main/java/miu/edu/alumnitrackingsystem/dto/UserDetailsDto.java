package miu.edu.alumnitrackingsystem.dto;

import lombok.Data;
import miu.edu.alumnitrackingsystem.util.UserType;

import java.util.List;
@Data
public class UserDetailsDto {
    private int id;
    private String email;
    private String firstName;
    private String lastName;
    private String state;
    private String city;
    private List<JobDto> jobs;
    public UserType userType;
}
