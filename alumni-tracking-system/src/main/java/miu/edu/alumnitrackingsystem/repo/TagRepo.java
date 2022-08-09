package miu.edu.alumnitrackingsystem.repo;

import miu.edu.alumnitrackingsystem.entity.Tag;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepo extends CrudRepository<Tag, Integer> {
    Tag findByTagEqualsIgnoreCase(String tag);
}
