import React, { useState } from "react";
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

const Profile = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  console.log("current user", currentUser);
  
  const [userState, setUserState] = useState("");
  const [userCity, setUserCity] = useState("");

  const handleUserStateChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserState(value);
  };

  const handleUserCityChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserCity(value);
  };

  useState(() => {
    dispatch(fetchUserByEmail());
  }, []);
  const handleUserUpdate = async () => {};

  return (
    <Grid
      wrap="wrap"
      container
      columnSpacing={3}
      rowGap={10}
      margin={10}
      maxWidth={1000}
    >
      <Grid item xs={3}>
        <TextField disabled label="Email" />
      </Grid>
      <Grid item xs={3}>
        <TextField disabled label="FirstName" />
      </Grid>
      <Grid item xs={3}>
        <TextField disabled label="LastName" />
      </Grid>
      <Grid item xs={3}>
        <TextField label="GPA" />
      </Grid>
      <Grid item xs={3}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select
            style={{ width: 200 }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userState}
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
            value={userCity}
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
    </Grid>
  );
};

export default Profile;
