package miu.edu.alumnitrackingsystem.service.impl;

import lombok.extern.slf4j.Slf4j;
import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.dto.StudentDetailsDto;
import miu.edu.alumnitrackingsystem.dto.UserDetailsDto;
import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Student;
import miu.edu.alumnitrackingsystem.entity.User;
import miu.edu.alumnitrackingsystem.repo.FacultyRepo;
import miu.edu.alumnitrackingsystem.repo.StudentRepo;
import miu.edu.alumnitrackingsystem.repo.UserRepo;
import miu.edu.alumnitrackingsystem.service.UserService;
import miu.edu.alumnitrackingsystem.util.UserType;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo repo;
    @Autowired
    private FacultyRepo facultyRepo;
    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<User> getAll() {
        return (List<User>) repo.findAll();
    }

    @Override
    public UserDetailsDto getById(int id) {

        var a= repo.findById(id).orElse(null);
        if(a!= null){
            var model = modelMapper.map(a, UserDetailsDto.class);
            model.setUserType(UserType.Admin);
            return model;
        }
        return null;
    }

    @Override
    public void save(User user) {
        repo.save(user);
    }

    @Override
    public void update(User user) {
        repo.save(user);
    }

    @Override
    public void delete() {

    }

    @Override
    public User getUserByEmailAndRole(String email, String fName, String lName, UserType userType) {
        var user = repo.findAllByEmailEqualsIgnoreCase(email);
        if(user== null || user.size() == 0){
            if(userType==UserType.Student){
                Student s= new Student();
                s.setEmail(email);
                s.setFirstName(fName);
                s.setLastName(lName);
                studentRepo.save(s);
                return s;
            } else if (userType == UserType.Faculty) {
                Faculty f = new Faculty();
                f.setEmail(email);
                f.setFirstName(fName);
                f.setLastName(lName);
                facultyRepo.save(f);
                return f;

            } else if (userType== UserType.Admin) {
                User u = new User();
                u.setEmail(email);
                u.setFirstName(fName);
                u.setLastName(lName);
                repo.save(u);
                return u;
            }else{
                throw new RuntimeException("Invalid User type");
            }
        }

        return user.get(0);
    }
    public Object getUserByEmail(String email){
        var users = repo.findAllByEmailEqualsIgnoreCase(email);
        if(users!= null && users.size() > 0){
            User u = users.get(0);
            Student s = studentRepo.findById(u.getId()).orElse(null);
            if(s!= null){
                var details =  modelMapper.map(s, StudentDetailsDto.class);
                details.setUserType(UserType.Student);
                return details;
            }

            Faculty f = facultyRepo.findById(u.getId()).orElse(null);
            if(f!= null){
                var details =  modelMapper.map(f, FacultyDetailsDto.class);
                details.setUserType(UserType.Faculty);
                return details;
            }

            var details =  modelMapper.map(u, UserDetailsDto.class);
            details.setUserType(UserType.Admin);
            return details;
        }

        return null;


    }
    public void update(int id, UserDetailsDto userDetailsDto){
        var user = repo.findById(id).orElse(null);
        if(user==null)
            throw new RuntimeException("No user found");

        var entity = modelMapper.map(userDetailsDto, User.class);
        entity.setId(id);
        repo.save(entity);
    }

    @Override
    public User getLoggedInUser(){
        var tokenValues = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println("token values " + tokenValues.getClaims().toString());
        String email = tokenValues.getClaim("email");
        var users = repo.findAllByEmailEqualsIgnoreCase(email);
        if(users!= null && users.size()>0){
            return users.get(0);
        }
        return null;
    }

  @Override
  public void saveFcmToken(String fcmToken) {
    var user = getLoggedInUser();
    if(user != null) {
      user.setFcmToken(fcmToken);
      repo.save(user);
      log.info("Fcm Token is updated for user id{}", user.getId());
    } else {
      log.info("Fcm Token is not updated for user id{}", user.getId());
    }

  }
}
