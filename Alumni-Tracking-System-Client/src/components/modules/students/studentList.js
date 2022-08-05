import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../actions/studentActions";

const StudentList = () => {
  const students = useSelector((state) => state.student.students);
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchAllStudents());
  }, []);

  return (
    <div>
      Allll students welcome........
      {students.length
        ? students.map((student) => <div key={student.id}>{student.name}</div>)
        : null}
    </div>
  );
};

export default StudentList;
