package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miu.edu.alumnitrackingsystem.entity.Tag;

import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobDto {
    private int id;
    private String title;

    private String description;

    private String companyName;
    private String state;
    private String city;
    private List<StudentDto> appliedStudent;
}
