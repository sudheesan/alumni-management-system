package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.dto.UserDetailsDto;
import miu.edu.alumnitrackingsystem.dto.UserDto;
import miu.edu.alumnitrackingsystem.entity.Student;
import miu.edu.alumnitrackingsystem.entity.User;
import miu.edu.alumnitrackingsystem.util.UserType;

import java.util.List;

public interface UserService {
    List<User> getAll();
    UserDetailsDto getById(int id);
    void save(User user);
    void update(User user);
    void delete();
    User getUserByEmailAndRole(String email,String fName, String lName,  UserType userType);
    Object getUserByEmail(String email);
    void update(int id, UserDetailsDto userDetailsDto);
    User getLoggedInUser();
    void saveFcmToken(int userId, String fcmToken);

}
