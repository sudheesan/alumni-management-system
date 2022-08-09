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
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepo repo;
    @Autowired
    private JobRepo jobRepo;
    @Autowired
    private ModelMapper mapper;

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
            return mapper.map(entity, StudentDetailsDto.class);
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
        var studentId=1;//Todo change
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
        var studentId=2;//todo change
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
}
