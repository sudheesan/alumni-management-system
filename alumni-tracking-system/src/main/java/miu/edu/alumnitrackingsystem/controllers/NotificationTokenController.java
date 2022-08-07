package miu.edu.alumnitrackingsystem.controllers;

import com.google.firebase.messaging.FirebaseMessagingException;
import miu.edu.alumnitrackingsystem.entity.UserFcmToken;
import miu.edu.alumnitrackingsystem.models.NotificationMessage;
import miu.edu.alumnitrackingsystem.repo.TokenRepo;
import miu.edu.alumnitrackingsystem.service.FirebaseMessagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/notification-token")
public class NotificationTokenController {
    @Autowired
    private TokenRepo tokenRepo;
    @Autowired
    private FirebaseMessagingService firebaseMessagingService;
    @PostMapping
    public void saveUserToken(@RequestBody UserFcmToken userFcmToken) throws FirebaseMessagingException {
//      var notification = new NotificationMessage();
//      notification.setSubject("MIU AMP");
//      notification.setContent("Thank you for allowing us");
//      firebaseMessagingService.sendNotification(notification, userFcmToken.getFcmToken());
      tokenRepo.save(userFcmToken);
    }
}
