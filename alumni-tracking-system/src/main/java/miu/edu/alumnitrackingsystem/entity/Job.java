package miu.edu.alumnitrackingsystem.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String description;

    @ManyToMany
    private List<Tag> tags = new ArrayList<>();


    private String companyName;

    @ManyToOne(fetch = FetchType.EAGER)
    private User postedBy;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Student> appliedStudent;

    private Boolean deleted = false;

    private String state;
    private String city;
}
