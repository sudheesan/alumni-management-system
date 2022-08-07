package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.Job;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepo extends CrudRepository<Job, Integer> {

}
