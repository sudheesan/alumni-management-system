import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoadingButton from "@mui/lab/LoadingButton";

import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import UploadFile from "@mui/icons-material/UploadFile";
import Snackbar from "@mui/material/Snackbar";

import ApplyJobModalContent from "./applyModalContent";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../utils/firebase";
import to from "../../../../utils/to";
import { applyToJob } from "../../../../services/jobService";
import Alert from "../../common/alert";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const initialAlertState = {
  open: false,
  severity: "success",
  message: "no message",
};

export default function JobApplyModal(props) {
  const { openModal, jobDetail, handleClose } = props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);

  const [isApplying, setIsApplying] = useState(false);

  const [applyAlert, setAppyAlert] = useState(initialAlertState);

  const [cvUrl, setCvUrl] = useState("");

  const [progressPercent, setProgressPercent] = useState(0);

  const handleApply = async () => {
    const params = {
      id: jobDetail.id,
      cvUrl,
    };
    setIsApplying(true);
    const [error, result] = await to(applyToJob, params);
    setIsApplying(false);
    if (!error) {
      setAppyAlert({
        open: true,
        severity: "success",
        message: "Applied successfully",
      });
    } else {
     
      setAppyAlert({
        open: true,
        severity: "error",
        message: "Error while applying for the job",
      });
    }
  };

  const handleAlertClose = () => {
    setAppyAlert(initialAlertState);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target?.files[0];
    if (!file) {
      alert("Can't get the file please choose it again");
    }
    setSelectedFile(file);
    setIsFilePicked(true);

    const storageRef = ref(storage, `cvs/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setCvUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <Snackbar
        open={applyAlert.open}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={applyAlert.severity}
          sx={{ width: "100%" }}
        >
          {applyAlert.message}
        </Alert>
      </Snackbar>
      <Modal
        onClose={handleClose}
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "800px", maxHeight: "600px" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ApplyJobModalContent jobDetail={jobDetail} />
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="column">
                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    component="label"
                    color="primary"
                  >
                    <UploadFile />
                    <input type="file" onChange={handleFileUpload} hidden />
                    <span>Upload Your CV</span>
                  </Button>
                </Grid>
                <Grid item>
                  {" "}
                  <Box
                    fullWidth
                    component="div"
                    sx={{ p: 2, mt: 4, border: "1px dashed grey" }}
                  >
                    {`You selected: ${selectedFile ? selectedFile.name : ""}`}
                  </Box>
                </Grid>
                <Grid sx={{ mt: 4 }} item>
                  <LoadingButton
                    disabled={!isFilePicked || isApplying}
                    loading={isApplying}
                    onClick={handleApply}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Apply !!
                  </LoadingButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
