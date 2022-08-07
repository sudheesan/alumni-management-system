package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.entity.Tag;
import miu.edu.alumnitrackingsystem.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {
    @Autowired
    private TagService tagService;

    @GetMapping
    public List<Tag> getAll(){
        return  tagService.getAll();
    }

    @PostMapping
    public void save(@RequestBody Tag tag){
        tagService.save(tag);
    }
}
