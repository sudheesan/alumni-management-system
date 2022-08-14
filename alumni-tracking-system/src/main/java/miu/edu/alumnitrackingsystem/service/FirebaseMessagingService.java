package miu.edu.alumnitrackingsystem.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import lombok.RequiredArgsConstructor;
import miu.edu.alumnitrackingsystem.models.NotificationMessage;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FirebaseMessagingService {

  private final FirebaseMessaging firebaseMessaging;


  public String sendNotification(String title, String body, String token) throws FirebaseMessagingException {

    Notification notification = Notification
      .builder()
      .setTitle(title)
      .setBody(body)
      .build();

    System.out.println(token);
    Message message = Message
      .builder()
      .setToken(token)
      .setNotification(notification)
      .build();

    return firebaseMessaging.send(message);
  }

}

