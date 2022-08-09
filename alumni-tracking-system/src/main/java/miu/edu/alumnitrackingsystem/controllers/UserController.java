package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.dto.UserDetailsDto;
import miu.edu.alumnitrackingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/{email}")
    public Object getUserByEmail(@PathVariable String email){
        return userService.getUserByEmail(email);
    }

    @PutMapping("/{id}")
    public void updateAdmin(@PathVariable int id, @RequestBody UserDetailsDto  userDetailsDto){
        userService.update(id, userDetailsDto);
    }

    @GetMapping("/getbyid/{id}")
    public UserDetailsDto getById(@PathVariable int id){
        return userService.getById(id);
    }
}
