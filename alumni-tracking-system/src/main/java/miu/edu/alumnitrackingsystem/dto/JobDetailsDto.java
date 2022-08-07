package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miu.edu.alumnitrackingsystem.entity.Tag;

import java.util.ArrayList;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDetailsDto {
    private int id;

    private String description;

    private List<Tag> tags = new ArrayList<>();

    private String companyName;

    private UserDto postedBy;

    private List<StudentDto> appliedStudent;
    private String state;
    private String city;
}
