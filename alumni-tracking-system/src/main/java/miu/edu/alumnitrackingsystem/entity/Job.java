package miu.edu.alumnitrackingsystem.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private int id;

    private String description;
    private String title;
    private String companyName;
    private Boolean deleted = false;
    private String state;
    private String city;

    @JoinColumn(name = "job_id")
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<File> files=new ArrayList<>();
    @JoinColumn(name = "job_id")
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<JobCv> jobCvs= new ArrayList<>();

    @ManyToMany
    private List<Tag> tags = new ArrayList<>();

    @ManyToOne(fetch = FetchType.EAGER)
    private User postedBy;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    private List<Student> appliedStudent= new ArrayList<>();

    public void addCv(JobCv cv){
        jobCvs.add(cv);
    }

    public void addAppliedStudent(Student s){
        appliedStudent.add(s);
    }
}
