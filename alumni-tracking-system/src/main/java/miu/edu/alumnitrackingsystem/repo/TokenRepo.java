package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.UserToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Repository
public interface TokenRepo extends CrudRepository<UserToken, Integer> {
    List<UserToken> findUserTokenByUserId(int userID);
}
