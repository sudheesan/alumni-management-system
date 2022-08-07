package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.dto.StudentDetailsDto;
import miu.edu.alumnitrackingsystem.dto.StudentDto;
import miu.edu.alumnitrackingsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.attribute.UserDefinedFileAttributeView;
import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
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
}
