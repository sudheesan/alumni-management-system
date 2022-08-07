package miu.edu.alumnitrackingsystem.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Faculty extends User{
    private String department;

    @OneToMany(mappedBy = "faculty", fetch = FetchType.LAZY)
    private List<Comment> comments;

    private Boolean deleted = false;
}
