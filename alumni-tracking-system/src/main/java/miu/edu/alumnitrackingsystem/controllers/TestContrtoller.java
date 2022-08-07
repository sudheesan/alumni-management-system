package miu.edu.alumnitrackingsystem.controllers;

import com.google.firebase.messaging.FirebaseMessagingException;
import lombok.RequiredArgsConstructor;
import miu.edu.alumnitrackingsystem.models.NotificationMessage;
import miu.edu.alumnitrackingsystem.models.Test;
import miu.edu.alumnitrackingsystem.service.FirebaseMessagingService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/tests")
@CrossOrigin
@RequiredArgsConstructor
public class TestContrtoller {

  private final FirebaseMessagingService firebaseMessagingService;

  @PostMapping("/notification")
  public String sendNotification(@RequestBody NotificationMessage notificationMessage,
                                 @RequestParam String token) throws FirebaseMessagingException {
    return firebaseMessagingService.sendNotification(notificationMessage, token);
  }

  @GetMapping
  public List<Test> getAllTests() {
    Test test1 = new Test(1, "Sudheesan");
    Test test2 = new Test(2, "Ronny");
    var users = new ArrayList<Test>();
    users.add(test1);
    users.add(test2);
    return users;
  }
}
