package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.dto.CommentDto;
import miu.edu.alumnitrackingsystem.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/faculties")
public class FacultyController {
    @Autowired
    private FacultyService service;

    @PostMapping("/{studentId}/add-comment")
    public void addCommentToStudent(@PathVariable int studentId, @RequestBody CommentDto comment){
        service.addCommentToStudent(studentId,comment.getComment());
    }
}
