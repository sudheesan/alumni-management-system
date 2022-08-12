package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<User, Integer> {
    List<User> findAllByEmailEqualsIgnoreCase(String email);
}
