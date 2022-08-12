import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Button, Grid } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

import SampleJob from "../jobCard";
import MyAdUpdateModal from "./updateModal";
import MyJobPostModal from "./jobPostModal";
import JobApplicants from "./jobApplicants";
import { fetchAllMyAds } from "../../../../actions/myAdsActions";
import { fetchAllTags } from "../../../../actions/tagsActions";

const GridItem = function (props) {
  return (
    <Grid item>
      <SampleJob bottomButtonTyepe="update" {...props} />
    </Grid>
  );
};

const MyJobList = () => {
  const allMyads = useSelector((state) => state.myAds.myJobAds);
  const isMyAdsLoading = useSelector((state) => state.myAds.isMyAdsLoading);

  const dispatch = useDispatch();
  const [updateJobModalOpen, setUpdateJobModalOpen] = useState(false);
  const [jobPostModalOpen, setJobPostModalOpen] = useState(false);
  const [jobApplicationsModalOpen, setJobPostApplicationsModalOpen] =
    useState(false);

  const [jobPostToUpdate, setJobPostToUpdate] = useState(null);
  const [jobPostWithApplicants, setJobPostWithApplicants] = useState(null);

  useEffect(() => {
    dispatch(fetchAllMyAds());
    dispatch(fetchAllTags());
  }, []);

  const handleUpdateJobModalOpen = (job) => {
    setJobPostToUpdate(job);
    setUpdateJobModalOpen(true);
  };

  const handleApplicantsModalOpen = (job) => {
    setJobPostWithApplicants(job);
    setJobPostApplicationsModalOpen(true);
  };

  const handleUpdateJobModalClose = () => {
    setJobPostToUpdate(null);
    setUpdateJobModalOpen(false);
    dispatch(fetchAllMyAds());
  };

  const handleJobPostModalOpen = () => {
    setJobPostModalOpen(true);
  };

  const handleJobPostModalClose = () => {
    setJobPostToUpdate(null);
    setJobPostModalOpen(false);
    dispatch(fetchAllMyAds());
  };

  const handleJobApplicantstModalClose = () => {
    setJobPostApplicationsModalOpen(false);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isMyAdsLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {jobPostModalOpen && (
        <MyJobPostModal
          handleClose={handleJobPostModalClose}
          openModal={jobPostModalOpen}
        />
      )}
      {updateJobModalOpen && (
        <MyAdUpdateModal
          handleClose={handleUpdateJobModalClose}
          jobDetail={jobPostToUpdate}
          openModal={updateJobModalOpen}
        />
      )}
      {jobApplicationsModalOpen && (
        <JobApplicants
          handleClose={handleJobApplicantstModalClose}
          jobDetail={jobPostWithApplicants}
          openModal={jobApplicationsModalOpen}
        />
      )}
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
        <Grid item sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {allMyads && allMyads.length
              ? allMyads.map((job) => (
                  <GridItem
                    handleUpdateJobModalOpen={handleUpdateJobModalOpen}
                    handleApplyJobModalOpen={handleApplicantsModalOpen}
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
