package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.Faculty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface FacultyRepo extends CrudRepository<Faculty, Integer> {
}
