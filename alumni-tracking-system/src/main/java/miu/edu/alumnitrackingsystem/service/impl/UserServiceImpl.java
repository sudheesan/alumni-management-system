package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Student;
import miu.edu.alumnitrackingsystem.entity.User;
import miu.edu.alumnitrackingsystem.repo.FacultyRepo;
import miu.edu.alumnitrackingsystem.repo.StudentRepo;
import miu.edu.alumnitrackingsystem.repo.UserRepo;
import miu.edu.alumnitrackingsystem.service.UserService;
import miu.edu.alumnitrackingsystem.util.UserType;
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
    public User getUserByEmailAndRole(String email, UserType userType) {
        var user = repo.findUserByEmailEqualsIgnoreCase(email);
        if(user== null){
            if(userType==UserType.Student){
                Student s= new Student();
                s.setEmail(email);
                return s;
            } else if (userType == UserType.Faculty) {
                Faculty f = new Faculty();
                f.setEmail(email);
                return f;

            } else if (userType== UserType.Admin) {
                User u = new User();
                u.setEmail(email);
                return u;
            }else{
                throw new RuntimeException("Invalid User type");
            }
        }

        return user;
    }
}
