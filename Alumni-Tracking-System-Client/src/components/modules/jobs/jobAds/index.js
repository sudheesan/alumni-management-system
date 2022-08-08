import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {Grid} from "@mui/material";
import SampleJob from "../sampleJob";
import JobApplyModal from "../jobAds/applyModal";
import {fetchAllJobs} from "../../../../actions/JobAdActions";
import {fetchAllTags} from "../../../../actions/tagsActions";
import {JoinFull} from "@mui/icons-material";

const GridItem = function (props) {
  return (
    <Grid item>
      <SampleJob bottomButtonTyepe="apply" {...props} />
    </Grid>
  );
};


const JobAdList = () => {
  const dispatch = useDispatch();

  const allJobAds = useSelector((state) => state.jobAds.jobAds);
  const allTags = useSelector((state) => state.tags.jobTags);

  const [jobList, setJobList] = useState(allJobAds);
  const [value, setValue] = useState([]);
  const [applyJobobModalOpen, setApllyJobModalOpen] = useState(false);
  const [jobPostToAppy, setJobPostToApply] = useState(null);

  useEffect(() => {
    dispatch(fetchAllJobs())
    dispatch(fetchAllTags())
  }, [])

  useEffect(() => {
    if(value.length > 0) {
      const filteredJobs = value.length
        ? allJobAds.filter((job) => job.tags.some((tag) => value.includes(tag)))
        : allJobAds;
      setJobList(filteredJobs);
    }
  }, [value]);

  const handleApplyJobModalOpen = (job) => {
    setJobPostToApply(job);
    setApllyJobModalOpen(true);
  };

  const handleApplyJobModalClose = () => {
    setJobPostToApply(null);
    setApllyJobModalOpen(false);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([...newValue]);
        }}
        options={allTags}
        getOptionLabel={(option) => option}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option} {...getTagProps({index})} />
          ))
        }
        style={{width: 500, marginTop: 16, marginLeft: 50}}
        renderInput={(params) => (
          <TextField {...params} label="Job Tags" placeholder="Favorites"/>
        )}
      />

      <JobApplyModal
        handleClose={handleApplyJobModalClose}
        jobDetail={jobPostToAppy}
        openModal={applyJobobModalOpen}
      />

      <Grid container spacing={4} sx={{m: 2}}>
        {jobList.map((job) => (

          <GridItem
            handleApplyJobModalOpen={handleApplyJobModalOpen}
            key={job.id}
            jobDetail={job}
          />
        ))
        }
      </Grid>
    </div>
  );
};

export default JobAdList;
