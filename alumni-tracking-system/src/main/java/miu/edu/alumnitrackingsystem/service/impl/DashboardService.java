package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.dto.ChartsDto;
import miu.edu.alumnitrackingsystem.service.JobService;
import miu.edu.alumnitrackingsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.PrimitiveIterator;

@Service
public class DashboardService {
    @Autowired
    private JobService jobService;

    @Autowired
    private StudentService studentService;

    public ChartsDto getChartsData(){
        var jobsByCity = jobService.getNumberOfJobByCity();
        var jobsByState = jobService.getNumberOfJobByState();
        var jobsByTag = jobService.JobByTags();
        var studentByState = studentService.getNumberOfStudentByState();
        var studentByCity = studentService.getNumberOfJobByCity();
        ChartsDto dto = new ChartsDto();
        dto.setJobsByCity(jobsByCity);
        dto.setJobsByState(jobsByState);
        dto.setJobsByTag(jobsByTag);
        dto.setStudentsByState(studentByState);
        dto.setStudentsByCity(studentByCity);
        return dto;

    }
}
