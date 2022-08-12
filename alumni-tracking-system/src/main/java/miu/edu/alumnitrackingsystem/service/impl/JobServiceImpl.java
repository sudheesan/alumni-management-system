package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.dto.JobDetailsDto;
import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Job;
import miu.edu.alumnitrackingsystem.entity.Tag;
import miu.edu.alumnitrackingsystem.repo.*;
import miu.edu.alumnitrackingsystem.service.JobService;
import miu.edu.alumnitrackingsystem.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.security.Security;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobServiceImpl implements JobService {
    @Autowired
    private JobRepo repo;
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private FacultyRepo facultyRepo;
    @Autowired
    private TagRepo tagRepo;

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private FileRepo fileRepo;

    @Autowired
    private UserService userService;

    @Override
    public List<JobDto> getAll() {

        List<JobDto> result = new ArrayList<>();
        var entities = repo.findAll();
        entities.forEach(e->
        {
            result.add(modelMapper.map(e, JobDto.class));
        });

        return result;
    }

    @Override
    public JobDetailsDto getById(int id) {
        var entity = repo.findById(id).orElse(null);
        if(entity!= null){
            return modelMapper.map(entity, JobDetailsDto.class);

        }
        return null;
    }

    @Override
    public void save(JobDetailsDto job) {
        var currentUser = userService.getLoggedInUser();
        int currentUserId = currentUser.getId();

        var user = userRepo.findById(currentUserId).orElse(null);
        if(user!=null){
            var entity = modelMapper.map(job, Job.class);
            entity.setPostedBy(user);

            var tags = entity.getTags();
            var files = entity.getFiles();
            List<Tag> resultTags = new ArrayList<>();
            tags.forEach(tag->{
                Tag result= null;
                var tagEntity = tagRepo.findByTagEqualsIgnoreCase(tag.getTag());
                if(tagEntity!=null){
                    result = tagEntity;
                }else{
                    tagRepo.save(tag);
                    result = tag;
                }
                resultTags.add(result);
            });
            fileRepo.saveAll(files);
            entity.setTags(resultTags);
            entity.setFiles(files);
            repo.save(entity);
        }

    }

    @Override
    public void update(int jobId, JobDetailsDto job) {

        var currentUser = userService.getLoggedInUser();
        int currentUserId = currentUser.getId();
        var user = userRepo.findById(currentUserId).orElse(null);
        var jobEntity = repo.findById(jobId).orElse(null);
        if(user!=null && jobEntity!= null){
            job.setId(jobId);
            var entity = modelMapper.map(job, Job.class);
            entity.setPostedBy(jobEntity.getPostedBy());

            repo.save(entity);
        }
    }

    @Override
    public void delete() {

    }

    @Override
    public List<JobDto> myPostedJob(){
        var currentUser = userService.getLoggedInUser();
        int currentUserId = currentUser.getId();
        var user = userRepo.findById(currentUserId).orElse(null);
        if(user!= null){
            List<JobDto> result = new ArrayList<>();
            var entities = user.getJobs();
            entities.forEach(e->
            {
                var myjob = modelMapper.map(e, JobDto.class);
                var cvs = e.getJobCvs();
                myjob.getAppliedStudent().forEach(aps->{
                    var scv = cvs.stream().filter(cv-> cv.getId() == aps.getId()).collect(Collectors.toList());
                    if(scv!= null && scv.size()> 0){
                        aps.setCvUrl(scv.get(0).getCvUrl());
                    }

                });
                result.add(modelMapper.map(e, JobDto.class));
            });

            return result;
        }
        return null;
    }
}
