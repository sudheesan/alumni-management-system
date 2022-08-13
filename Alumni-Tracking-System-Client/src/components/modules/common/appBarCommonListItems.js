import React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import NavLink from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBox from "@mui/icons-material/AccountBox";
import ListSubheader from "@mui/material/ListSubheader";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FeedIcon from "@mui/icons-material/Feed";

export const commonListItems = (
  <React.Fragment>
    <Link to="/discover">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>

        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>

    <Link to="/discover/profile">
      <ListItemButton>
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </Link>

    <ListSubheader component="div" inset>
      Jobs
    </ListSubheader>

    <Link to="/discover/jobList">
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>

        <ListItemText primary="My Adds" />
      </ListItemButton>
    </Link>

    <Link to="/discover/jobAdList">
      <ListItemButton>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>

        <ListItemText primary="Job Ads" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
