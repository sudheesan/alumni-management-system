package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.dto.JobDetailsDto;
import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.entity.Job;
import miu.edu.alumnitrackingsystem.service.JobService;
import miu.edu.alumnitrackingsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/jobs")
public class JobController {
    @Autowired
    private JobService service;

    @Autowired
    private StudentService studentService;

    @GetMapping
    public List<JobDto> gatAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public JobDetailsDto getById(@PathVariable int id){
        return service.getById(id);
    }

    @GetMapping("/my-jobs")
    public List<JobDto> myPostedJobs(){
        return service.myPostedJob();
    }

    @GetMapping("/my-applied-jobs")
    public List<JobDto> myAppliedJobs(){
        return studentService.getMyAppliedJob();
    }

    @PostMapping
    public void save(@RequestBody JobDetailsDto jobDetailsDto){
        service.save(jobDetailsDto);

    }
    @PutMapping
    public void update(@RequestBody JobDetailsDto jobDetailsDto){
        service.update(jobDetailsDto);

    }
}
