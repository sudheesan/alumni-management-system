package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.dto.*;
import miu.edu.alumnitrackingsystem.entity.Student;

import java.util.List;
import java.util.Map;

public interface StudentService {
    List<StudentDto> getAll();
    StudentDetailsDto getById(int id);
    void save(Student student);
    void update(Student student);
    void delete();
    List<JobDto> getMyAppliedJob();

    void appliedToJob(int jobId, CvForJobDto cvForJobDto);
    void update(int id,StudentDetailsDto studentDetailsDto);

    Map<String, Long> getNumberOfStudentByState();

    Map<String, Long> getNumberOfJobByCity();
}
