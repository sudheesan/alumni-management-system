import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import avatar from "./guy.jpeg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const StudentCard = (props) => {
  const { student } = props;
  const navigate = useNavigate();

  const handleNavigation = (param) => {
    navigate(`${param}`);
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      onClick={() => handleNavigation(student.id)}
    >
      <Grid container spacing={2}>
        <Grid item width="100%" textAlign="center">
          <ButtonBase>
            <Img sx={{ width: 150, height: 150 }} alt="complex" src={avatar} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {`${student && student.firstName} ${
                  student && student.lastName
                } `}
              </Typography>
              <Typography variant="body2">
                {student && student.email}
              </Typography>
              <Typography variant="body2">
                {`ID: ${student && student.id}`}
              </Typography>
              <Typography variant="body2">
                {`GPA: ${student && student.gpa}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StudentCard;
