import React from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import guyImage from "./guy.jpeg";

const commentObject = {
  name: "Michel Michel",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse congue vulputate lobortis. Pellentesque at interdum tortor. Quisque arcu quam, malesuada vel mauris et, posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus. In elit metus, efficitur lobortis nisi quis, molestie porttitor metus. Pellentesque et neque risus. Aliquam vulputate, mauris vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat quam lectus vitae ex.",
};

const Comment = () => {
  return (
    <Grid item>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={guyImage} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{commentObject.name}</h4>
            <p style={{ textAlign: "left" }}>{commentObject.comment}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Comment;
