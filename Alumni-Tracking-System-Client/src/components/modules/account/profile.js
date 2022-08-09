import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import states from "./states";
import { Grid } from "@mui/material";
import UpdateSharp from "@mui/icons-material/UpdateSharp";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByEmail } from "../../../actions/userActions";
import to from "../../../utils/to";
import { updateUser } from "../../../services/userManagementService";

const Profile = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  const [userDetails, setUserDetails] = useState(currentUser);

  const { city, state, userType } = userDetails || {};

  console.log("State", state, city);

  useEffect(() => {
    dispatch(fetchUserByEmail());
  }, []);

  useEffect(() => {
    setUserDetails(currentUser);
  }, [currentUser]);

  const handleUserUpdate = async () => {
    await to(updateUser, userDetails);
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
    <Grid
      wrap="wrap"
      container
      columnSpacing={3}
      rowGap={10}
      margin={10}
      maxWidth={1000}
    >
      {userDetails && (
        <>
          <Grid item xs={3}>
            <TextField
              value={userDetails.email}
              label="Email"
              InputLabelProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={userDetails.firstName}
              label="FirstName"
              InputLabelProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              value={userDetails.lastName}
              label="LastName"
              InputLabelProps={{ readOnly: true }}
            />
          </Grid>
          {userType && userType === "Student" && (
            <Grid item xs={3}>
              <TextField
                onChange={handleUserGpaChange}
                type="number"
                value={userDetails.gpa}
                label="GPA"
              />
            </Grid>
          )}
          {userType && userType === "Faculty" && (
            <Grid item xs={3}>
              <TextField
                onChange={handleDepartmentChange}
                value={userDetails.department}
                label="deapartment"
              />
            </Grid>
          )}
          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
          <Grid
            justifyContent="center"
            textAlign="center"
            stye={{ display: "flex", width: "230px" }}
            item
            display="flex"
            width={230}
          >
            <Button
              onClick={handleUserUpdate}
              size="large"
              variant="contained"
              color="primary"
              endIcon={<UpdateSharp />}
            >
              Update
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Profile;
