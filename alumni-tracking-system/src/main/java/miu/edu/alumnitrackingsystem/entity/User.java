package miu.edu.alumnitrackingsystem.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "table_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String email;
    private String firstName;
    private String lastName;

    @OneToMany(mappedBy = "postedBy", fetch = FetchType.LAZY)
    private List<Job> jobs;

    private Boolean deleted = false;

    private String state;
    private String city;
    private String experience;



}
