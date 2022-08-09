package miu.edu.alumnitrackingsystem.service;

import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.dto.UserDetailsDto;
import miu.edu.alumnitrackingsystem.entity.Faculty;

import java.util.List;

public interface FacultyService {
    List<Faculty> getAll();
    FacultyDetailsDto getById(int id);
    void save(Faculty faculty);
    void update(Faculty faculty);
    void delete();
    void addCommentToStudent(int studentId, String comment);
    void update(int id, FacultyDetailsDto facultyDetailsDto);
}
