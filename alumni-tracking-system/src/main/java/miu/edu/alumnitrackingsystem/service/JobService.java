package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.dto.JobDetailsDto;
import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Job;

import java.util.List;

public interface JobService {
    List<JobDto> getAll();
    JobDetailsDto getById(int id);
    void save(JobDetailsDto job);
    void update(JobDetailsDto job);
    void delete();
    List<JobDto> myPostedJob();
}
