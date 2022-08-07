import React, { useState }  from "react";
import { Button, Grid } from "@mui/material";
import InsertCommentSharpIcon from '@mui/icons-material/InsertCommentSharp';

import Comment from "./comment";
import FacultyCommentModal from "./newFacultyCommentModel"

export default function Comments() {
  
  const [commentModelOpen, setCommentModalOpen] = useState(false);

  const handleCommentModalOpen = () => {
    setCommentModalOpen(true);
  }

  const handleCommentModalClose = () => {
    setCommentModalOpen(false);
  }

  return (
    <Grid container direction="column">
      <FacultyCommentModal openModal={commentModelOpen} handleClose={handleCommentModalClose} />
      <Grid item>
        <Grid
          justifyContent="space-between"
          style={{
            background: "white",
            paddingRight: 25,
            paddingLeft: 25,
            paddingTop: 20,
            marginLeft: 5,
            marginRight: 5,
          }}
          container
        >
          <Grid item>
            <h1>Faculty Comments</h1>
          </Grid>
          <Grid item>
            <Button onClick={handleCommentModalOpen} size="large" variant="contained" endIcon={<InsertCommentSharpIcon size="lg" />}>Post a comment</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div
          style={{
            paddingRight: 10,
            paddingLeft: 10,
            marginLeft: 5,
            marginRight: 5,
            overflow: "scroll",
            maxHeight: "5500px",
            height: "550px",
            background: "white",
          }}
        >
          <Grid paddingTop={2} container direction="column" rowSpacing={5}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
