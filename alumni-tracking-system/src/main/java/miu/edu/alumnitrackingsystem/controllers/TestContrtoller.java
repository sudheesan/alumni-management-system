package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.models.Test;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/tests")
@CrossOrigin
public class TestContrtoller {
    @GetMapping
    public List<Test> getAllTests(){
        Test test1 = new Test(1, "Sudheesan");
        Test test2 = new Test(2, "Ronny");
        var users = new ArrayList<Test>();
        users.add(test1);
        users.add(test2);
        return users;
    }
}
