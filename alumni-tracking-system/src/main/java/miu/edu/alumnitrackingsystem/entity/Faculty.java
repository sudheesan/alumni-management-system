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
    private Boolean deleted = false;
}
