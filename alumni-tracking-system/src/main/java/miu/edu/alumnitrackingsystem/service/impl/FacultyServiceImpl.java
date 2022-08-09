package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.dto.FacultyDetailsDto;
import miu.edu.alumnitrackingsystem.entity.Comment;
import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.User;
import miu.edu.alumnitrackingsystem.repo.FacultyRepo;
import miu.edu.alumnitrackingsystem.repo.StudentRepo;
import miu.edu.alumnitrackingsystem.service.FacultyService;
import miu.edu.alumnitrackingsystem.util.UserType;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyServiceImpl implements FacultyService {

    @Autowired
    FacultyRepo repo;
    @Autowired
    StudentRepo studentRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Faculty> getAll() {
        return (List<Faculty>) repo.findAll();
    }

    @Override
    public FacultyDetailsDto getById(int id) {

        var f= repo.findById(id).orElse(null);
        if(f!= null){
            var model = modelMapper.map(f, FacultyDetailsDto.class);
            model.setUserType(UserType.Faculty);
            return model;
        }
        return null;
    }

    @Override
    public void save(Faculty faculty) {
        repo.save(faculty);
    }

    @Override
    public void update(Faculty faculty) {
        repo.save(faculty);
    }

    @Override
    public void delete() {

    }

    @Override
    public void addCommentToStudent(int studentId, String commentText) {
        int facultyId=1; //todo change
        var student = studentRepo.findById(studentId).orElse(null);
        var faculty = repo.findById(facultyId).orElse(null);
        if(student!= null && faculty!= null){
            var comment = new Comment();
            comment.setComment(commentText);
            comment.setFaculty(faculty);
            student.addComment(comment);
            comment.setStudent(student);
            studentRepo.save(student);
        }

    }

    @Override
    public void update(int id, FacultyDetailsDto facultyDetailsDto) {
        var user = repo.findById(id).orElse(null);
        if(user==null)
            throw new RuntimeException("No user found");

        var entity = modelMapper.map(facultyDetailsDto, Faculty.class);
        entity.setId(id);
        repo.save(entity);
    }
}
