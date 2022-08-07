import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Comments from "./facultyComments";
import ProfileCard from "./userCard";

const StudentDetails = () => {
  
  const { student } = useParams();

  return (
    <Grid container direction='column' rowSpacing={2}>
      <Grid display='flex' marginTop={2} justifyContent='center' item>
        <ProfileCard
          name="Rita Correia"
          age="32"
          city="London"
          followers="80K"
          likes="803K"
          photos="1.4K"
        />
      </Grid>
      <Grid item>
        <Comments />
      </Grid>
    </Grid>
  );
};

export default StudentDetails;
