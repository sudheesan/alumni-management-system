package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.dto.JobDetailsDto;
import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Job;

import java.util.List;
import java.util.Map;

public interface JobService {
    List<JobDto> getAll();
    JobDetailsDto getById(int id);
    void save(JobDetailsDto job);
    void update(int jobid, JobDetailsDto job);
    void delete();
    List<JobDto> myPostedJob();

    Map<String, Long> getNumberOfJobByState();

    Map<String, Long> getNumberOfJobByCity();

    Map<String, Integer> JobByTags();
}
