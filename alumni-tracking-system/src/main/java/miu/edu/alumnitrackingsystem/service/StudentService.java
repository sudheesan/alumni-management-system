package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.dto.StudentDetailsDto;
import miu.edu.alumnitrackingsystem.dto.StudentDto;
import miu.edu.alumnitrackingsystem.entity.Student;

import java.util.List;

public interface StudentService {
    List<StudentDto> getAll();
    StudentDetailsDto getById(int id);
    void save(Student student);
    void update(Student student);
    void delete();
    List<JobDto> getMyAppliedJob();
    void appliedToJob(int jobId);
}
