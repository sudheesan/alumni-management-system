import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ResetTvSharpIcon from "@mui/icons-material/ResetTvSharp";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { fetchAllStudents } from "../../../actions/studentActions";
import StudentCard from "./studenCard";
import states from "../../../utils/states";

const StudentList = () => {
  const students = useSelector((state) => state.student.students);
  const isStudentsLoading = useSelector(
    (state) => state.student.isStudentsLoading
  );
  const dispatch = useDispatch();

  const [studentsList, setStudentList] = useState(students);

  const [idFilterValue, setIdFilterValue] = useState("");
  const [stateFilterValue, setStateFilterValue] = useState("");
  const [cityFilterValue, setCityFilterValue] = useState("");
  const [majorFilterValue, setMajorFilterValue] = useState("");

  useState(() => {
    dispatch(fetchAllStudents());
  }, []);

  useEffect(() => {
    setStudentList(students);
  }, [students]);

  useEffect(() => {
    let filteredValues = students;
    if (idFilterValue.trim().length) {
      filteredValues = filteredValues.filter((student) =>
        idFilterValue.includes(student.id)
      );
    }
    if (stateFilterValue.trim().length) {
      filteredValues = filteredValues.filter(
        (student) => student.state === stateFilterValue
      );
    }
    if (cityFilterValue.trim().length) {
      filteredValues = filteredValues.filter(
        (student) => student.city === cityFilterValue
      );
    }
    // if (majorFilterValue.trim().length) {
    //   filteredValues = filteredValues.filter(
    //     (student) => student.major === majorFilterValue
    //   );
    // }

    setStudentList(filteredValues);
  }, [idFilterValue, stateFilterValue, cityFilterValue, majorFilterValue]);

  const handleResetFilters = () => {
    setIdFilterValue("");
    setStateFilterValue("");
    setCityFilterValue("");
    setMajorFilterValue("");
    setStudentList(students);
  };

  return (
    <Grid
      paddingLeft={2}
      paddingRight={2}
      marginTop={3}
      justifyContent="center"
      container
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isStudentsLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid columnGap={4} justifyContent="center" container>
        <Grid item sm={1}>
          <Tooltip title="ResetFilters">
            <IconButton
              onClick={handleResetFilters}
              style={{ fontSize: "30px", color: "#ffae1a" }}
              size="large"
              aria-label="add to favorites"
            >
              <ResetTvSharpIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item sm={2}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Filter By State
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={stateFilterValue}
              label="Filter By State"
              onChange={(event) => setStateFilterValue(event.target.value)}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Filter By City
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={cityFilterValue}
              label="Filter By City"
              onChange={(event) => setCityFilterValue(event.target.value)}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Filter By Major
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={majorFilterValue}
              label="Filter By Major"
              onClick={(event) => setMajorFilterValue(event.target.value)}
            >
              {states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2}>
          <FormControl style={{ width: "100%" }}>
            <TextField
              value={idFilterValue}
              onChange={(event) => setIdFilterValue(event.target.value)}
              id="outlined-required"
              label="Search By Id"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        style={{
          height: "715px",
          borderStyle: "dotted",
          borderRadius: "3px",
          overflow: "scroll",
        }}
        marginTop={1}
        columnSpacing={2}
        padding={1}
        justifyContent="center"
        container
      >
        {studentsList.length
          ? studentsList.map((student) => (
              <Grid xs={3} item key={student.id}>
                <StudentCard student={student} />
              </Grid>
            ))
          : null}
      </Grid>
    </Grid>
  );
};

export default StudentList;
