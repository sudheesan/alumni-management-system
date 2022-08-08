import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

import SampleJob from "../sampleJob";
import MyAdUpdateModal from "./updateModal";
import MyJobPostModal from "./jobPostModal";
import { fetchAllMyAds } from "../../../../actions/myAdsActions";
import { fetchAllTags } from "../../../../actions/tagsActions";
import Loader from "../../common/loader";

const GridItem = function (props) {
  return (
    <Grid item>
      <SampleJob bottomButtonTyepe="update" {...props} />
    </Grid>
  );
};

const MyJobList = () => {
  const allMyads = useSelector((state) => state.myAds.myJobAds);
  const showAlert = useSelector((state) => state.myAds.showAlert);

  
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(showAlert);
  const [updateJobModalOpen, setUpdateJobModalOpen] = useState(false);
  const [jobPostModalOpen, setJobPostModalOpen] = useState(false);
  const [jobPostToUpdate, setJobPostToUpdate] = useState(null);

  useEffect(() => {
    dispatch(fetchAllMyAds());
    dispatch(fetchAllTags());
  }, []);

  useEffect(() => {
    setAlert(true)
  }, [showAlert]);

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
