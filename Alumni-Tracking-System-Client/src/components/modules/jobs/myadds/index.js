import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid } from "@mui/material";
import AddCircle from '@mui/icons-material/AddCircle';

import SampleJob from "../sampleJob";
import MyAdUpdateModal from "./updateModal";
import MyJobPostModal from "./jobPostModal";
import { fetchAllMyAds } from "../../../../actions/myAdsActions";

const jobs = [
  {
    id: 1,
    postedBy: "Sudheesan",
    postedDate: new Date().toDateString(),
    description: "Facebook, Hiring js developers",
    benifits: "Good Salary",
    content: "Facebook, Hiring js developers",
    tags: ["js"],
  },
  {
    id: 2,
    postedBy: "Rony",
    benifits: "Good Salary",
    postedDate: new Date().toDateString(),
    description: "Microsoft, Hiring .net developers",
    content: "Microsoft, Hiring .net developers",
    tags: [".net"],
  },
  {
    id: 3,
    postedBy: "Amit",
    benifits: "Good Salary",
    postedDate: new Date().toDateString(),
    description: "Google, Hiring jav developers",
    content: "Google, Hiring jav developers",
    tags: ["java"],
  },
  {
    id: 4,
    postedBy: "Umar Inan",
    benifits: "Good Salary",
    postedDate: new Date().toDateString(),
    content: "Meta, Hiring js and java developers",
    tags: ["java", "js"],
  },
];

const GridItem = function (props) {
  return (
    <Grid item>
      <SampleJob bottomButtonTyepe="update" {...props} />
    </Grid>
  );
};

const MyJobList = () => {

  const allMyads = useSelector((state) => state.myAds.myJobAds);
  const dispatch = useDispatch();
  const [updateJobModalOpen, setUpdateJobModalOpen] = useState(false);
  const [jobPostModalOpen, setJobPostModalOpen] = useState(false);
  const [jobPostToUpdate, setJobPostToUpdate] = useState(null);

  useEffect(() => {
      dispatch(fetchAllMyAds())
  }, [])

  const handleUpdateJobModalOpen = (job) => {
    setJobPostToUpdate(job);
    setUpdateJobModalOpen(true);
  };

  const handleUpdateJobModalClose = () => {
    setJobPostToUpdate(null);
    setUpdateJobModalOpen(false);
  };

  const handleJobPostModalOpen = () => {
    setJobPostModalOpen(true);
  };

  const handleJobPostModalClose = () => {
    setJobPostToUpdate(null);
    setJobPostModalOpen(false);
  };

  return (
    <div>
      <MyAdUpdateModal
        handleClose={handleUpdateJobModalClose}
        jobDetail={jobPostToUpdate}
        openModal={updateJobModalOpen}
      />
      <MyJobPostModal
        handleClose={handleJobPostModalClose}
        openModal={jobPostModalOpen}
      />

      <Grid container direction="column" sx={{ m: 2 }}>
        <Grid item>
          <Button
            onClick={handleJobPostModalOpen}
            variant="contained"
            endIcon={<AddCircle />}
          >
            Post a job
          </Button>
        </Grid>
        <Grid item sx={{mt: 4}}>
          <Grid container spacing={4}>
            {jobs && jobs.length
              ? jobs.map((job) => (
                  <GridItem
                    handleUpdateJobModalOpen={handleUpdateJobModalOpen}
                    key={job.id}
                    jobDetail={job}
                  />
                ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyJobList;
