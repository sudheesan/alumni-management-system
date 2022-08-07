package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.entity.Tag;

import java.util.List;

public interface TagService {
    List<Tag> getAll();
    Tag getById(int id);
    void save(Tag tag);
    void update(Tag tag);
    void delete();
}
