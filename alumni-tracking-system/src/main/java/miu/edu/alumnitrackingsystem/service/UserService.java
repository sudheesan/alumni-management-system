package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.entity.Student;
import miu.edu.alumnitrackingsystem.entity.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    User getById(int id);
    void save(User user);
    void update(User user);
    void delete();
}
