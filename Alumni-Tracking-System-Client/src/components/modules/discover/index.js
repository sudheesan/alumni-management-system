import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import NoOfAdsPerLocationPiChart from "../charts/noOfAdsPerLocation-pi";
import NoOfStudentsPerStatePiChart from "../charts/noOfStudentsPerState-pi";
import NoOfStudentsPerCityPiChart from "../charts/noOfStudentsPerCity-pi";
import JobsByTagPiChart from "../charts/jobsByTag-pi";
import to from "../../../utils/to";
import { getChartData } from "../../../services/dashBoardService";

const Discover = () => {
  const [graphData, setGraphData] = useState({});

  const {
    jobsByCity,
    jobsByState,
    jobsByTag,
    studentsByCity,
    studentsByState,
  } = graphData;

  console.log(
    jobsByCity,
    jobsByState,
    jobsByTag,
    studentsByCity,
    studentsByState
  );

  const handleChartDate = async () => {
    const [error, response] = await to(getChartData);
    setGraphData(response);
  };

  useEffect(() => {
    handleChartDate();
  }, []);

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
              <NoOfAdsPerLocationPiChart jobsByState={jobsByState} />
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
              <JobsByTagPiChart jobsByTag={jobsByTag} />
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
              <NoOfStudentsPerStatePiChart studentsByState={studentsByState} />
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
              <NoOfStudentsPerCityPiChart studentsByCity={studentsByCity} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Discover;
