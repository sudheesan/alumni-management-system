import React from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import guyImage from "./guy.jpeg";

const Comment = (props) => {
  const { comment } = props;
  return (
    <Grid item>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar>A</Avatar>
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <p style={{ textAlign: "left" }}>{comment}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Comment;
