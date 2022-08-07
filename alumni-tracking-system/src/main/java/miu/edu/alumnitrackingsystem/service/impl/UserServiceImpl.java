package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.User;
import miu.edu.alumnitrackingsystem.repo.FacultyRepo;
import miu.edu.alumnitrackingsystem.repo.UserRepo;
import miu.edu.alumnitrackingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo repo;

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
}
