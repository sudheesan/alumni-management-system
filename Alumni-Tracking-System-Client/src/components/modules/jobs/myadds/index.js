import React, { useState } from "react";
import { Grid } from "@mui/material";
import SampleJob from "../sampleJob";
import MyAdUpdateModal from "./updateModal";

const jobs = [
  {
    id: 1,
    postedBy: "Sudheesan",
    postedDate: new Date().toDateString(),
    content: "Facebook, Hiring js developers",
    tags: ["js"],
  },
  {
    id: 2,
    postedBy: "Rony",
    postedDate: new Date().toDateString(),
    content: "Microsoft, Hiring .net developers",
    tags: [".net"],
  },
  {
    id: 3,
    postedBy: "Amit",
    postedDate: new Date().toDateString(),
    content: "Google, Hiring jav developers",
    tags: ["java"],
  },
  {
    id: 4,
    postedBy: "Umar Inan",
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
  const [updateJobModalOpen, setUpdateJobModalOpen] = useState(false);
  const [jobPostToUpdate, setJobPostToUpdate] = useState(null);

  const handleUpdateJobModalOpen = (job) => {
    setJobPostToUpdate(job);
    setUpdateJobModalOpen(true);
  };

  const handleUpdateJobModalClose = () => {
    setJobPostToUpdate(null);
    setUpdateJobModalOpen(false);
  };

  return (
    <div>
      <MyAdUpdateModal
        handleClose={handleUpdateJobModalClose}
        jobDetail={jobPostToUpdate}
        openModal={updateJobModalOpen}
      />
      <Grid container spacing={4} sx={{ m: 2 }}>
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
    </div>
  );
};

export default MyJobList;
