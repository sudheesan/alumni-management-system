package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.UserFcmToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TokenRepo extends CrudRepository<UserFcmToken, Integer> {
    List<UserFcmToken> findUserTokenByUserId(int userID);
}
