import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import SampleJob from "../sampleJob";
import JobApplyModal from "../jobAds/applyModal";
import { fetchAllJobs } from "../../../../actions/JobAdActions";
import { fetchAllTags } from "../../../../actions/tagsActions";

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
    dispatch(fetchAllJobs());
    dispatch(fetchAllTags());
  }, []);

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
        getOptionLabel={(option) => {
          return option.tag;
        }}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            return <Chip label={option.tag} {...getTagProps({ index })} />;
          })
        }
        style={{ width: 500, marginTop: 16, marginLeft: 50 }}
        renderInput={(params) => {
          return (
            <TextField {...params} label="Job Tags" placeholder="Favorites" />
          );
        }}
      />
      {applyJobobModalOpen && (
        <JobApplyModal
          handleClose={handleApplyJobModalClose}
          jobDetail={jobPostToAppy}
          openModal={applyJobobModalOpen}
        />
      )}
      <Grid container spacing={4} sx={{ m: 2 }}>
        {/* {jobList && jobList.length
          ? jobList.map((job) => (
              <GridItem
                handleApplyJobModalOpen={handleApplyJobModalOpen}
                key={job.id}
                jobDetail={job}
              />
            ))
          : null} */}

        {jobList &&
          jobList.length &&
          jobList.forEach((job) => {
            console.log(job);
          })}
      </Grid>
    </div>
  );
};

export default JobAdList;
