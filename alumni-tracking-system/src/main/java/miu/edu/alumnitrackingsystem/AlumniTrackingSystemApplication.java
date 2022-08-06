package miu.edu.alumnitrackingsystem;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.messaging.FirebaseMessaging;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;

@SpringBootApplication
public class AlumniTrackingSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlumniTrackingSystemApplication.class, args);
	}

  @Bean
  FirebaseMessaging firebaseMessaging() throws IOException {
    GoogleCredentials googleCredentials = GoogleCredentials
      .fromStream(new ClassPathResource("firebase-service-account.json").getInputStream());
    FirebaseOptions firebaseOptions = FirebaseOptions
      .builder()
      .setCredentials(googleCredentials)
      .build();
    FirebaseApp app = FirebaseApp.initializeApp(firebaseOptions, "miu-am");
    return FirebaseMessaging.getInstance(app);
  }
}
