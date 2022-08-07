import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllStudents } from "../../../actions/studentActions";

const StudentList = () => {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useState(() => {
    dispatch(fetchAllStudents());
  }, []);

  const handleNavigation = (param) =>{
    console.log("valeee", param)
    navigate(`${param}`)
  }

  return (
    <div>
      <div onClick={() => handleNavigation('sudheesan')} >Sudheesan</div>
      {students.length
        ? students.map((student) => <div key={student.id}>{student.name}</div>)
        : null}
    </div>
  );
};

export default StudentList;
