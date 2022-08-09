package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.dto.CommentDto;
import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/faculties")
public class FacultyController {
    @Autowired
    private FacultyService service;

    @GetMapping("/{id}")
    public FacultyDetailsDto getById(@PathVariable int id){
        return service.getById(id);
    }
    @PostMapping("/{studentId}/add-comment")
    public void addCommentToStudent(@PathVariable int studentId, @RequestBody CommentDto comment){
        service.addCommentToStudent(studentId,comment.getComment());
    }

    @PutMapping("/{id}")
    public void update(@PathVariable int id, @RequestBody FacultyDetailsDto facultyDetailsDto){
        service.update(id, facultyDetailsDto);
    }
}
