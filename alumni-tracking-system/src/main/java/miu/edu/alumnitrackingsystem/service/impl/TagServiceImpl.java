package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Tag;
import miu.edu.alumnitrackingsystem.repo.FacultyRepo;
import miu.edu.alumnitrackingsystem.repo.TagRepo;
import miu.edu.alumnitrackingsystem.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TagServiceImpl implements TagService {
    @Autowired
    private TagRepo repo;

    @Override
    public List<Tag> getAll() {

        var tags = (List<Tag>) repo.findAll();
        return tags.stream().filter(t->t.getDeleted() == false).collect(Collectors.toList());
    }

    @Override
    public Tag getById(int id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public void save(Tag tag) {
        repo.save(tag);
    }

    @Override
    public void update(Tag tag) {
        repo.save(tag);
    }

    @Override
    public void delete() {

    }
}
