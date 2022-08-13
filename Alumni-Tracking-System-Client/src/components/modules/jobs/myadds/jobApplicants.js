import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
export default function JobApplicants(props) {
  const { openModal, jobDetail, handleClose } = props;

  const {appliedStudent} = jobDetail;
  console.log("Job Details", jobDetail);

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={openModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 800, height: 600, maxHeight: 600 }}>
          <Grid container direction="column" rowSpacing={2}>
            <Grid item style={{fontWeight:"bold"}}>Applicants</Grid>
            <Grid item>
              <Divider light={false} />
            </Grid>
            <Grid item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{fontWeight:"bold"}}>Applicant</TableCell>
                      <TableCell style={{fontWeight:"bold"}} align="right">
                        Downloac Curriculum Vitae
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appliedStudent.map((student) => (
                      <TableRow
                        key={student.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {
                          
                        }
                        <TableCell component="th" scope="row">
                          {student.firstName} {student.lastName}
                        </TableCell>
                        <TableCell align="right">{student.cvUrl}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
