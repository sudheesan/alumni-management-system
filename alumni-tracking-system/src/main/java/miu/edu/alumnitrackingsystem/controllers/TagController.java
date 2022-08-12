package miu.edu.alumnitrackingsystem.controllers;

import lombok.extern.slf4j.Slf4j;
import miu.edu.alumnitrackingsystem.entity.Tag;
import miu.edu.alumnitrackingsystem.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@RequestMapping("/api/v1/tags")
public class TagController {
    @Autowired
    private TagService tagService;

    @GetMapping
    public List<Tag> getAll(){
        return  tagService.getAll();
    }

    @PostMapping
    public void save(@RequestBody Tag tag){
      log.info("Initializing '{}' realm in Keycloak ...", "name sdkjfhdskjhfhksd");

      tagService.save(tag);
    }
}
