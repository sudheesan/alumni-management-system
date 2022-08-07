
import React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBox from '@mui/icons-material/AccountBox';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FeedIcon from '@mui/icons-material/Feed';

export const commonListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/discover"><ListItemText primary="Dashboard" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountBox />
      </ListItemIcon>
      <Link to="/discover/profile"><ListItemText primary="Profile" /></Link>
    </ListItemButton>
    <ListSubheader component="div" inset>
      Jobs
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FiberNewIcon />
      </ListItemIcon>
      <Link to="/discover/jobPost"><ListItemText primary="Post a job" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="/discover/jobList"><ListItemText primary="My jobs" /></Link>

    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FeedIcon />
      </ListItemIcon>
      <Link to="/discover/jobAdList"> <ListItemText primary="Job Ads" /></Link>
    </ListItemButton>
  </React.Fragment>
);
