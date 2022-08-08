import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import InsertCommentSharpIcon from "@mui/icons-material/InsertCommentSharp";

import Comment from "./comment";
import FacultyCommentModal from "./newFacultyCommentModel";
import { useDispatch } from "react-redux";
import { fetchStudentByid } from "../../../actions/studentActions";

export default function Comments(props) {
  const {
    student: { comments, id },
  } = props;

  const dispatct = useDispatch();

  const [commentModelOpen, setCommentModalOpen] = useState(false);

  const handleCommentModalOpen = () => {
    setCommentModalOpen(true);
  };

  const handleCommentModalClose = () => {
    dispatct(fetchStudentByid(id));
    setCommentModalOpen(false);
  };



  return (
    <Grid container direction="column">
      <FacultyCommentModal
        openModal={commentModelOpen}
        handleClose={handleCommentModalClose}
        id={id}
      />
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
            <Button
              onClick={handleCommentModalOpen}
              size="large"
              variant="contained"
              endIcon={<InsertCommentSharpIcon size="lg" />}
            >
              Post a comment
            </Button>
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
          {comments && comments.length ? (
            <Grid paddingTop={2} container direction="column" rowSpacing={5}>
              {
                comments.map((cmnt) => <Comment key={cmnt.id} comment={cmnt.comment} /> )
              }
            </Grid>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
}
