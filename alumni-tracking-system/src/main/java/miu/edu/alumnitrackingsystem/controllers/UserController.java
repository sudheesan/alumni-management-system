package miu.edu.alumnitrackingsystem.controllers;

import com.google.firebase.messaging.FirebaseMessagingException;
import lombok.extern.slf4j.Slf4j;
import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.dto.FcmTokenDto;
import miu.edu.alumnitrackingsystem.dto.UserDetailsDto;
import miu.edu.alumnitrackingsystem.models.NotificationMessage;
import miu.edu.alumnitrackingsystem.service.FirebaseMessagingService;
import miu.edu.alumnitrackingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController

@CrossOrigin
@RequestMapping("/api/v1/users")
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private FirebaseMessagingService firebaseMessagingService;
    @GetMapping("/{email}")
    public Object getUserByEmail(@PathVariable String email){
        log.info("calling /api/v1/users- getUserByEmail");
        return userService.getUserByEmail(email);
    }

    @PutMapping("/{id}")
    public void updateAdmin(@PathVariable int id, @RequestBody UserDetailsDto  userDetailsDto){
        log.info("calling /api/v1/users- updateAdmin");
        userService.update(id, userDetailsDto);
    }

    @GetMapping("/getbyid/{id}")
    public UserDetailsDto getById(@PathVariable int id){
        log.info("calling /api/v1/users- UserDetailsDto");
        return userService.getById(id);
    }

    @PutMapping("/fcm-token")
    public void saveFcmToken(@RequestBody FcmTokenDto fcmTokenDto) throws FirebaseMessagingException {

        log.info("calling /api/v1/users- saveFcmToken");
        userService.saveFcmToken(fcmTokenDto.getFcmToken());
    }
}
