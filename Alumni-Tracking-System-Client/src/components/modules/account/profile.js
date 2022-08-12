import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import states from "../../../utils/states";
import { Grid } from "@mui/material";
import UpdateSharp from "@mui/icons-material/UpdateSharp";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

import Alert from "../common/alert";
import { fetchUserByEmail } from "../../../actions/userActions";
import to from "../../../utils/to";
import { updateUser } from "../../../services/userManagementService";

const initialAlertState = {
  open: false,
  severity: "success",
  message: "no message",
};

const Profile = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const isUserLoading = useSelector((state) => state.user.isUserLoading);

  const [userDetails, setUserDetails] = useState(currentUser);

  const [isUserUpdating, setIsUserUpdating] = useState(false);

  const [updateAlert, setUpdateAlert] = useState(initialAlertState);

  const { userType } = userDetails || {};

  useEffect(() => {
    dispatch(fetchUserByEmail());
  }, []);

  useEffect(() => {
    setUserDetails(currentUser);
  }, [currentUser]);

  const handleUserUpdate = async () => {
    setIsUserUpdating(true);
    const [error, result] = await to(updateUser, userDetails);
    setIsUserUpdating(false);

    if (!error) {
      setUpdateAlert({
        open: true,
        severity: "success",
        message: "User updated successfully",
      });
    } else {
      setUpdateAlert({
        open: true,
        severity: "error",
        message: "Error while updatimg user",
      });
    }
  };

  const handleAlertClose = () => {
    setUpdateAlert(initialAlertState);
  };

  const handleDepartmentChange = (event) => {
    const {
      target: { value },
    } = event;

    setUserDetails({
      ...userDetails,
      department: value,
    });
  };

  const handleProExperienceChage = (event) => {
    const {
      target: { value },
    } = event;

    // setUserDetails({
    //   ...userDetails,
    //   professionalExperience: value,
    // });
  };

  const handleUserGpaChange = (event) => {
    const {
      target: { value },
    } = event;

    setUserDetails({
      ...userDetails,
      gpa: value,
    });
  };

  const handleUserStateChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserDetails({
      ...userDetails,
      state: value,
    });
  };

  const handleUserCityChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserDetails({
      ...userDetails,
      city: value,
    });
  };
  return (
    <Grid padding={4} container justifyContent="center">
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isUserLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid justifyContent="center" item sm={4}>
        {userDetails && (
          <Grid
            rowSpacing={8}
            justifyContent="center"
            container
            direction="column"
          >
            <Grid item sm={3}>
              <TextField
                value={userDetails.email}
                label="Email"
                InputLabelProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item sm={3}>
              <TextField
                value={userDetails.firstName}
                label="FirstName"
                InputLabelProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item sm={3}>
              <TextField
                value={userDetails.lastName}
                label="LastName"
                InputLabelProps={{ readOnly: true }}
              />
            </Grid>
            {userType && userType === "Student" && (
              <Grid item sm={3}>
                <TextField
                  onChange={handleUserGpaChange}
                  type="number"
                  value={userDetails.gpa}
                  label="GPA"
                />
              </Grid>
            )}
            {userType && userType === "Faculty" && (
              <Grid item sm={3}>
                <TextField
                  onChange={handleDepartmentChange}
                  value={userDetails.department}
                  label="deapartment"
                />
              </Grid>
            )}
            <Grid item sm={3}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  style={{ width: 200 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userDetails.state}
                  label="State"
                  onChange={handleUserStateChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={3}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  style={{ width: 200 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userDetails.city}
                  label="City"
                  onChange={handleUserCityChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid sm={4} item>
        <Grid rowSpacing={3} container direction="column">
          <Grid item>
            <TextareaAutosize
              onChange={handleProExperienceChage}
              maxRows={20}
              aria-label="maximum height"
              placeholder="My Professional experience"
              style={{ width: "100%", height: 400 }}
            />
          </Grid>
          <Grid textAlign="center" item>
            <LoadingButton
              onClick={handleUserUpdate}
              disabled={isUserUpdating}
              loading={isUserUpdating}
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
  );
};

export default Profile;
