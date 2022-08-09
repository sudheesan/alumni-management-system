package miu.edu.alumnitrackingsystem.service.impl;

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
import org.springframework.stereotype.Service;

import java.util.List;
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
    public User getById(int id) {
        return repo.findById(id).orElse(null);
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
        var user = repo.findUserByEmailEqualsIgnoreCase(email);
        if(user== null){
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

        return user;
    }
    public Object getUserByEmail(String email){
        User u = repo.findUserByEmailEqualsIgnoreCase(email);
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
}
