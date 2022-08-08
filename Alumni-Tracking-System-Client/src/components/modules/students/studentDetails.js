import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStudentByid } from "../../../actions/studentActions";
import Comments from "./facultyComments";
import ProfileCard from "./userCard";

const StudentDetails = () => {
  const { student } = useParams();
  const dispatct = useDispatch();

  const selectedStudent = useSelector((state) => state.student.selectedStudent);

  const [currentStudent, setCurrentStudent] = useState(selectedStudent);

  useEffect(() => {
    dispatct(fetchStudentByid(student));
  }, []);

  useEffect(() => {
    setCurrentStudent(selectedStudent);
  }, [selectedStudent]);

  return (
    <Grid container direction="column" rowSpacing={2}>
      {currentStudent && (
        <Grid display="flex" marginTop={2} justifyContent="center" item>
          <ProfileCard
            student={currentStudent}
            name="Rita Correia"
            age="32"
            city="London"
            followers="80K"
            likes="803K"
            photos="1.4K"
          />
        </Grid>
      )}
      {currentStudent && (
        <Grid item>
          <Comments student={currentStudent} />
        </Grid>
      )}
    </Grid>
  );
};

export default StudentDetails;
