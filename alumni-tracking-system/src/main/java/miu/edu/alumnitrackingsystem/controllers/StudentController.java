package miu.edu.alumnitrackingsystem.controllers;

import lombok.extern.slf4j.Slf4j;
import miu.edu.alumnitrackingsystem.dto.CvForJobDto;
import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.dto.StudentDetailsDto;
import miu.edu.alumnitrackingsystem.dto.StudentDto;
import miu.edu.alumnitrackingsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserDefinedFileAttributeView;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/students")
@Slf4j
public class StudentController {
    @Autowired private StudentService studentService;

    @GetMapping
    public List<StudentDto> getAll(){
        return studentService.getAll();
    }

    @GetMapping("/{id}")
    public StudentDetailsDto getById(@PathVariable int id){
        return studentService.getById(id);
    }

    @PostMapping("/apply-to-job/{jobId}")
    public void appliedToJob(@PathVariable int jobId,@RequestBody CvForJobDto cvForJobDto){
        studentService.appliedToJob(jobId, cvForJobDto);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody StudentDetailsDto studentDetailsDto){
        studentService.update(id, studentDetailsDto);
    }
}
