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
            <Avatar alt="Remy Sharp" src={guyImage} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Michel Michel</h4>
            <p style={{ textAlign: "left" }}>{comment}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Comment;
