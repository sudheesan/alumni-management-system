package miu.edu.alumnitrackingsystem.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Faculty faculty;

    private String comment;

    private Boolean deleted = false;

}
