import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import SampleJob from "./sampleJob";

const GridItem = function (props) {
  return (
    <Grid item>
      <SampleJob jobDetail={props.jobDetail} />
    </Grid>
  );
};

const tags = ["js", "java", ".net"];
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
const JobAdList = () => {
  const [jobList, setJobList] = useState(jobs);
  const [value, setValue] = useState([]);

  useEffect(() => {
    const filteredJobs = value.length ? jobs.filter(job => job.tags.some(tag => value.includes(tag))) : jobs;
    setJobList(filteredJobs);
  }, [value])

  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([...newValue]);
        }}
        options={tags}
        getOptionLabel={(option) => option}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))
        }
        style={{ width: 500, marginTop: 16, marginLeft: 50 }}
        renderInput={(params) => (
          <TextField {...params} label="Job Tags" placeholder="Favorites" />
        )}
      />
      <Grid container spacing={4} sx={{ m: 2 }}>
        {jobList && jobList.length
          ? jobList.map((job) => <GridItem key={job.id} jobDetail={job} />)
          : null}
      </Grid>
    </div>
  );
};

export default JobAdList;
