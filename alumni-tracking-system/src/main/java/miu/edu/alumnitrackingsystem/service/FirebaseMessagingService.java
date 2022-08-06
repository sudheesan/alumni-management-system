package miu.edu.alumnitrackingsystem.service;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import miu.edu.alumnitrackingsystem.models.NotificationMessage;
import org.springframework.stereotype.Service;

@Service
public class FirebaseMessagingService {

  private final FirebaseMessaging firebaseMessaging;

  public FirebaseMessagingService(FirebaseMessaging firebaseMessaging) {
    this.firebaseMessaging = firebaseMessaging;
  }


  public String sendNotification(NotificationMessage notificationMessage, String token) throws FirebaseMessagingException {

    Notification notification = Notification
      .builder()
      .setTitle(notificationMessage.getSubject())
      .setBody(notificationMessage.getContent())
      .build();

    Message message = Message
      .builder()
      .setToken(token)
      .setNotification(notification)
      .putAllData(notificationMessage.getData())
      .build();

    return firebaseMessaging.send(message);
  }

}

