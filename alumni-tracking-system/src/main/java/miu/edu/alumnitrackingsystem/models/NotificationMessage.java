package miu.edu.alumnitrackingsystem.models;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class NotificationMessage {
  private String subject;
  private String content;
  private Map<String, String> data = new HashMap<>();
  private String image;
}
