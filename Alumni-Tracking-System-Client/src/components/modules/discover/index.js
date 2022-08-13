import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import NoOfAdsPerLocationPiChart from "../charts/noOfAdsPerLocation-pi";
import NoOfStudentsPerStatePiChart from "../charts/noOfStudentsPerState-pi";
import NoOfStudentsPerCityPiChart from "../charts/noOfStudentsPerCity-pi";
import JobsByTagPiChart from "../charts/jobsByTag-pi";

const Discover = () => {
  return (
    <Grid
      rowSpacing={2}
      container
      direction="column"
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Grid item>
        <Grid container justifyContent="space-evenly">
          <Grid item sx={6}>
            <Paper
              sx={{
                p: 2,
                width: "500px",
                height: "400px",
              }}
            >
              <NoOfAdsPerLocationPiChart />
            </Paper>
          </Grid>
          <Grid item sx={6}>
            <Paper
              sx={{
                p: 2,
                width: "500px",
                height: "400px",
              }}
            >
              <JobsByTagPiChart />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-evenly">
          <Grid item sx={6}>
            <Paper
              sx={{
                p: 2,
                width: "500px",
                height: "400px",
              }}
            >
              <NoOfStudentsPerStatePiChart />
            </Paper>
          </Grid>
          <Grid item sx={6}>
            <Paper
              sx={{
                p: 2,
                width: "500px",
                height: "400px",
              }}
            >
              <NoOfStudentsPerCityPiChart />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Discover;
