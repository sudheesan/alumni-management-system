package miu.edu.alumnitrackingsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FcmTokenDto {
  private int userId;
  private String fcmToken;
}
