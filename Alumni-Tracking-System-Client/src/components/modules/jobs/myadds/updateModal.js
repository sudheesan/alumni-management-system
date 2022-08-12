import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Divider, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import UploadFile from "@mui/icons-material/UploadFile";
import UpdateSharp from "@mui/icons-material/UpdateSharp";
import Snackbar from "@mui/material/Snackbar";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import Alert from "../../common/alert";
import { storage } from "../../../../utils/firebase";
import states from "./states";
import { updateAnAd } from "../../../../services/myAdsService";
import to from "../../../../utils/to";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const initialAlertState = {
  open: false,
  severity: "success",
  message: "no message",
};

export default function MyAdUpdateModal(props) {
  const { openModal, jobDetail, handleClose } = props;
  const isMyAdsLoading = useSelector((state) => state.myAds.isMyAdsLoading);

  const { companyName, description, tags, state, city, id } = jobDetail;

  const allTags = useSelector((state) => state.tags.jobTags);
  const dispatch = useDispatch();

  const [jobTags, setJobTags] = useState(tags || []);
  const [jobDescription, setJobDescription] = useState(description || "");
  const [companyText, setCompanyText] = useState(companyName || "");
  const [companyState, setCompanyState] = useState(state || "");
  const [companyCity, setCompanyCity] = useState(city || "");
  const [selectedFile, setSelectedFile] = useState(null);

  const [imgUrl, setImgUrl] = useState(null);

  const [progressPercent, setProgressPercent] = useState(0);

  const [isAdUpdating, setIsAdUpdating] = useState(false);

  const [updateAlert, setUpdateAlert] = useState(initialAlertState);

  const handleJobPostUpdate = async () => {
    const params = {
      id,
      jobDescription,
      companyText,
      companyState,
      companyCity,
      jobTags,
    };
    setIsAdUpdating(true);
    const [error, result] = await to(updateAnAd, params);
    setIsAdUpdating(false);
    if (!error) {
      setUpdateAlert({
        open: true,
        severity: "success",
        message: "Ad updated successfully",
      });
    } else {
      setUpdateAlert({
        open: true,
        severity: "error",
        message: "Error while updatimg Ad",
      });
    }
  };

  const handleAlertClose = () => {
    setUpdateAlert(initialAlertState);
  };

  const handleDescriptionChange = (event) => {
    const {
      target: { value },
    } = event;
    setJobDescription(value);
  };

  const handleCompantTextChange = (event) => {
    const {
      target: { value },
    } = event;
    setCompanyText(value);
  };

  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    setJobTags(typeof value === "string" ? value.split(",") : value);
  };

  const handleCompanyStateChangeChange = (event) => {
    const {
      target: { value },
    } = event;
    setCompanyState(value);
  };

  const handleCompanyCityChangeChange = (event) => {
    const {
      target: { value },
    } = event;
    setCompanyCity(value);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    const file = event.target?.files[0];
    if (!file) {
      alert("Can't get the file please choose it again");
    }
    setSelectedFile(file);

    const storageRef = ref(storage, `cvs/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress);
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setImgUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <Snackbar
        open={updateAlert.open}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={updateAlert.severity}
          sx={{ width: "100%" }}
        >
          {updateAlert.message}
        </Alert>
      </Snackbar>
      <Modal
        onClose={handleClose}
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800, height: 600, maxHeight: 600 }}>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item>Update the job</Grid>
            <Grid item>
              <Divider light={false} />
            </Grid>
            <Grid item>
              <Grid
                wrap="wrap"
                height="550px"
                rowSpacing={2}
                container
                direction="column"
              >
                <Grid item>
                  <TextField
                    onChange={handleCompantTextChange}
                    value={companyText}
                    id="outlined-multiline-static"
                    label="Company"
                    multiline
                    rows={2}
                    variant="outlined"
                    style={{ width: 300 }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    value={jobDescription}
                    onChange={handleDescriptionChange}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    variant="outlined"
                    style={{ width: 300 }}
                  />
                </Grid>

                <Grid item style={{ width: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={companyState}
                      label="State"
                      onChange={handleCompanyStateChangeChange}
                    >
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item style={{ width: 300 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={companyCity}
                      label="City"
                      onChange={handleCompanyCityChangeChange}
                    >
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <div>
                    <FormControl sx={{ width: 300 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Tag
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={jobTags}
                        onChange={handleTagChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) =>
                          selected.map((value) => value.tag).join(", ")
                        }
                        MenuProps={MenuProps}
                      >
                        {allTags.map((name) => (
                          <MenuItem key={name.tag} value={name}>
                            <Checkbox checked={jobTags.indexOf(name) > -1} />
                            <ListItemText primary={name.tag} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item>
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
                        <span>Upload Image</span>
                      </Button>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Box
                        fullWidth
                        component="div"
                        sx={{ p: 2, border: "1px dashed grey" }}
                      >
                        {`You selected: ${
                          selectedFile ? selectedFile.name : ""
                        }`}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid textAlign="center" item>
                  <LoadingButton
                    onClick={handleJobPostUpdate}
                    disabled={isAdUpdating}
                    loading={isAdUpdating}
                    size="large"
                    variant="contained"
                    color="primary"
                    endIcon={<UpdateSharp />}
                  >
                    Update
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
