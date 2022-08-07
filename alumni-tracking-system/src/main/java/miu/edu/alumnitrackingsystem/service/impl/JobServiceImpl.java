package miu.edu.alumnitrackingsystem.service.impl;

import miu.edu.alumnitrackingsystem.dto.JobDetailsDto;
import miu.edu.alumnitrackingsystem.dto.JobDto;
import miu.edu.alumnitrackingsystem.entity.Faculty;
import miu.edu.alumnitrackingsystem.entity.Job;
import miu.edu.alumnitrackingsystem.entity.Tag;
import miu.edu.alumnitrackingsystem.repo.FacultyRepo;
import miu.edu.alumnitrackingsystem.repo.JobRepo;
import miu.edu.alumnitrackingsystem.repo.TagRepo;
import miu.edu.alumnitrackingsystem.repo.UserRepo;
import miu.edu.alumnitrackingsystem.service.JobService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        int currentUserId = 1;//todo change
        var user = userRepo.findById(currentUserId).orElse(null);
        if(user!=null){
            var entity = modelMapper.map(job, Job.class);
            entity.setPostedBy(user);

            var tags = entity.getTags();
            List<Tag> resultTags = new ArrayList<>();
            tags.forEach(tag->{
                Tag result= null;
                var tagEntity = tagRepo.findAllByTag(tag.getTag());
                if(tagEntity!=null && tagEntity.size() >0){
                    result = tagEntity.get(0);
                }else{
                    tagRepo.save(tag);
                    result = tag;
                }
                resultTags.add(result);
            });

            entity.setTags(resultTags);

            repo.save(entity);
        }

    }

    @Override
    public void update(JobDetailsDto job) {

        int currentUserId = 1;//todo change
        var user = userRepo.findById(currentUserId).orElse(null);
        var jobEntity = repo.findById(job.getId()).orElse(null);
        if(user!=null && jobEntity!= null){
            var entity = modelMapper.map(job, Job.class);

            repo.save(entity);
        }
    }

    @Override
    public void delete() {

    }

    @Override
    public List<JobDto> myPostedJob(){
        var currentUserId = 1;//need to update it from the context object
        var user = userRepo.findById(currentUserId).orElse(null);
        if(user!= null){
            List<JobDto> result = new ArrayList<>();
            var entities = user.getJobs();
            entities.forEach(e->
            {
                result.add(modelMapper.map(e, JobDto.class));
            });

            return result;
        }
        return null;
    }
}
