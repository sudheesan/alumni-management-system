import React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import GroupsIcon from "@mui/icons-material/Groups";

export const facultyListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Students
    </ListSubheader>

    <Link to="/discover/students">
      <ListItemButton>
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary="All Students" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
