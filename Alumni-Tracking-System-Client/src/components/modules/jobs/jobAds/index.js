import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import ResetTvSharpIcon from "@mui/icons-material/ResetTvSharp";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import SampleJob from "../jobCard";
import JobApplyModal from "../jobAds/applyModal";
import { fetchAllJobs } from "../../../../actions/JobAdActions";
import { fetchAllTags } from "../../../../actions/tagsActions";
import states from "../../../../utils/states";

const GridItem = function (props) {
  return (
    <Grid item>
      <SampleJob bottomButtonTyepe="apply" {...props} />
    </Grid>
  );
};

const JobAdList = () => {
  const dispatch = useDispatch();

  const isJobsLoading = useSelector((state) => state.jobAds.isJobsLoading);
  const allJobAds = useSelector((state) => state.jobAds.jobAds);
  const allTags = useSelector((state) => state.tags.jobTags);

  const [jobList, setJobList] = useState(allJobAds);
  const [value, setValue] = useState([]);
  const [applyJobobModalOpen, setApllyJobModalOpen] = useState(false);
  const [jobPostToAppy, setJobPostToApply] = useState(null);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [companyNameFilter, setCompanyNameFilter] = useState("");

  useEffect(() => {
    dispatch(fetchAllJobs());
    dispatch(fetchAllTags());
  }, []);

  useEffect(() => {
    setJobList(allJobAds);
  }, [allJobAds]);

  useEffect(() => {
    let filteredJobs = allJobAds;

    const filteredTagValues = value.map((tg) => tg.tag);

    if (filteredTagValues.length) {
      filteredJobs = filteredJobs.filter((job) =>
        job.tags.some((tg) => filteredTagValues.includes(tg.tag))
      );
    }
    if (selectedState && selectedState !== "") {
      filteredJobs = filteredJobs.filter((job) => job.state === selectedState);
    }
    if (selectedCity && selectedCity !== "") {
      filteredJobs = filteredJobs.filter((job) => job.state === selectedCity);
    }
    if (companyNameFilter && companyNameFilter.trim().length != 0) {
      filteredJobs = filteredJobs.filter((job) =>
        job.companyName.includes(companyNameFilter)
      );
    }
    setJobList(filteredJobs);
  }, [selectedState, selectedCity, companyNameFilter, value]);

  const resetFilters = () => {
    setValue([]);
    setSelectedState("");
    setSelectedCity("");
    setCompanyNameFilter("");
    setJobList(allJobAds);
  };

  const handleApplyJobModalOpen = (job) => {
    setJobPostToApply(job);
    setApllyJobModalOpen(true);
  };

  const handleApplyJobModalClose = () => {
    setJobPostToApply(null);
    setApllyJobModalOpen(false);
  };

  return (
    <Grid justifyContent="center" marginTop={4} container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isJobsLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid width="100%" justifyContent="center" container columnSpacing={10}>
        <Grid item sm={1}>
          <Tooltip title="ResetFilters">
            <IconButton
              onClick={resetFilters}
              style={{ fontSize: "30px", color: "#ffae1a" }}
              size="large"
              aria-label="add to favorites"
            >
              <ResetTvSharpIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item sm={4}>
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
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  label="Search By Job Tag"
                  placeholder="Tags"
                />
              );
            }}
          />
        </Grid>
        <Grid item sm={2}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Search By State
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedState}
              label="Search By State"
              onChange={(event) => setSelectedState(event.target.value)}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-label">
              Search By City
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCity}
              label="Search By State"
              onChange={(event) => setSelectedCity(event.target.value)}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={3}>
          <TextField
            onChange={(event) => setCompanyNameFilter(event.target.value)}
            id="outlined-required"
            label="Search By company"
          />
        </Grid>
      </Grid>

      <Grid
        justifyContent="center"
        height={700}
        maxHeight={700}
        overflow="scroll"
        marginTop={3}
        container
        spacing={3}
      >
        {jobList.length
          ? jobList.map((job) => (
              <GridItem
                handleApplyJobModalOpen={handleApplyJobModalOpen}
                key={job.id}
                jobDetail={job}
              />
            ))
          : null}
      </Grid>

      {applyJobobModalOpen && (
        <JobApplyModal
          handleClose={handleApplyJobModalClose}
          jobDetail={jobPostToAppy}
          openModal={applyJobobModalOpen}
        />
      )}
    </Grid>
  );
};

export default JobAdList;
