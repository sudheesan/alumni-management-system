package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.entity.Faculty;

import java.util.List;

public interface FacultyService {
    List<Faculty> getAll();
    Faculty getById(int id);
    void save(Faculty faculty);
    void update(Faculty faculty);
    void delete();
    void addCommentToStudent(int studentId, String comment);
}
