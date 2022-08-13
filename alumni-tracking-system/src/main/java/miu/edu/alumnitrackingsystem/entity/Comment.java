package miu.edu.alumnitrackingsystem.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne
    private Student student;

    private String comment;

    private Boolean deleted = false;

}
