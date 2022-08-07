import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchAllStudents } from "../../../actions/studentActions";
import StudentCard from "./studenCard";

const StudentList = () => {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchAllStudents());
  }, []);

  return (
    <Grid
      style={{ height: "112vh", maxHeight: "112vh" }}
      container
      padding={1}
      direction="column"
      rowSpacing={3}
    >
      <Grid padding={3}  item>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={10}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>With label + helper text</FormHelperText>
        </FormControl>
      </Grid>

      <Grid
        item
        style={{
          height: "90vh",
          maxHeight: "90vh",
          overflow: "scroll",
          borderStyle: "dotted",
          borderRadius: "3px",
        }}
      >
        <Grid padding={1} container columnSpacing={2} rowSpacing={2}>
          {/* {students.length
            ? students.map((student) => (
                <Grid item key={student.id}>
                  <StudentCard />
                </Grid>
              ))
            : null} */}
          <Grid xs={4} item key={1}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={2}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
          <Grid xs={4} item key={3}>
            <StudentCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudentList;
