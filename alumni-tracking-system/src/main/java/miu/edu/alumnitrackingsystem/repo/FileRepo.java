package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.File;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepo extends CrudRepository<File, Integer> {
}
