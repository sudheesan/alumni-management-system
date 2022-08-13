package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.dto.CvForJobDto;
import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.dto.StudentDetailsDto;
import miu.edu.alumnitrackingsystem.dto.StudentDto;
import miu.edu.alumnitrackingsystem.entity.JobCv;
import miu.edu.alumnitrackingsystem.entity.Student;
import miu.edu.alumnitrackingsystem.repo.JobRepo;
import miu.edu.alumnitrackingsystem.repo.StudentRepo;
import miu.edu.alumnitrackingsystem.service.StudentService;
import miu.edu.alumnitrackingsystem.service.UserService;
import miu.edu.alumnitrackingsystem.util.UserType;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepo repo;
    @Autowired
    private JobRepo jobRepo;
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private UserService userService;

    @Override
    public List<StudentDto> getAll() {

        List<StudentDto> result = new ArrayList<>();
        var students = (List<Student>) repo.findAll();
        if(students!= null){
            students.stream().filter(s->s.getDeleted()==false).collect(Collectors.toList()).forEach(st->{
                result.add(mapper.map(st,StudentDto.class));

            });
        }
        return result;
    }

    @Override
    public StudentDetailsDto getById(int id) {

        var entity= repo.findById(id).orElse(null);
        if(entity!= null){
            var model = mapper.map(entity, StudentDetailsDto.class);
            model.setUserType(UserType.Student);
            return model;
        }
        return null;
    }

    @Override
    public void save(Student student) {
        repo.save(student);
    }

    @Override
    public void update(Student student) {
        repo.save(student);
    }

    @Override
    public void delete() {

    }

    @Override
    public List<JobDto> getMyAppliedJob() {
        var currentUser = userService.getLoggedInUser();
        int studentId = currentUser.getId();
        var student = repo.findById(studentId).orElse(null);
        if(student!= null){
            List<JobDto> result = new ArrayList<>();
            var entities = student.getAppliedJobs();
            entities.forEach(e->{
                result.add(mapper.map(e, JobDto.class));
            });
            return  result;
        }
        return null;
    }

    @Override
    public void appliedToJob(int jobId, CvForJobDto cvForJobDto) {
        var currentUser = userService.getLoggedInUser();
        int studentId = currentUser.getId();
        var student = repo.findById(studentId).orElse(null);
        var job= jobRepo.findById(jobId).orElse(null);


        if(job!= null&& student!=null){
            var alreadyApplied = job.getAppliedStudent().stream().anyMatch(s->s.getId() == student.getId());
            if(alreadyApplied)
                return;
            //student.addToAppliedJob(job);
            //repo.save(student);
            job.addAppliedStudent(student);

            JobCv jobCv = new JobCv();
            jobCv.setStudentId(studentId);
            jobCv.setCvUrl(cvForJobDto.getCvUrl());
            job.addCv(jobCv);
            jobRepo.save(job);
        }


    }

    @Override
    public void update(int id, StudentDetailsDto studentDetailsDto) {
        var user = repo.findById(id).orElse(null);
        if(user==null)
            throw new RuntimeException("No user found");

        var entity = mapper.map(studentDetailsDto, Student.class);
        entity.setId(id);
        repo.save(entity);
    }

    @Override
    public Map<String, Long> getNumberOfStudentByState(){
        var student = getAll();
        var nomJobByState = student.stream().collect(Collectors.groupingBy(f-> f.getState(), Collectors.counting()));

        return nomJobByState;
    }
    @Override
    public Map<String, Long> getNumberOfJobByCity(){
        var student = getAll();
        var result = student.stream().collect(Collectors.groupingBy(f-> f.getCity(), Collectors.counting()));

        return result;
    }
}
