import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button, Divider, Grid } from "@mui/material";
import AddCommentSharpIcon from "@mui/icons-material/AddCommentSharp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const FacultyCommentModal = (props) => {
  const { openModal, handleClose } = props;

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800, height: 300, maxHeight: 600 }}>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>Add a new comment</Grid>
            <Grid item>
              <Divider light={false} />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                variant="outlined"
                style={{ width: 730 }}
              />
            </Grid>
            <Grid item>
              <Button
                style={{float: "right"}}
                variant="contained"
                endIcon={<AddCommentSharpIcon size="lg" />}
              >
                Save Comment
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default FacultyCommentModal;
