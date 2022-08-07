package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends CrudRepository<Student, Integer> {
}
