package miu.edu.alumnitrackingsystem.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Student extends User{
    private float gpa;

    @ManyToMany(mappedBy = "appliedStudent", fetch = FetchType.LAZY)
    private List<Job> appliedJobs= new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "student", cascade = CascadeType.ALL)
    private List<Comment> comments=new ArrayList<>();

    public void addComment(Comment comment){
        comments.add(comment);
    }
}
