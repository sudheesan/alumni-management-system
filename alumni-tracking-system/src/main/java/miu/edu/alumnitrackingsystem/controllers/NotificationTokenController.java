package miu.edu.alumnitrackingsystem.controllers;

import miu.edu.alumnitrackingsystem.entity.UserToken;
import miu.edu.alumnitrackingsystem.repo.TokenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/notification-token")
public class NotificationTokenController {
    @Autowired
    private TokenRepo tokenRepo;
    @PostMapping
    public void saveUserToken(@RequestBody UserToken userToken){
        tokenRepo.save(userToken);
    }
}
