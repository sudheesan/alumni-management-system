import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddToQueueSharpIcon from "@mui/icons-material/AddToQueueSharp";
import UpdateSharpIcon from "@mui/icons-material/UpdateSharp";

import JobImage from "../../../static/job.jpg";
import { Tooltip } from "@mui/material";

const SampleJob = (props) => {
  const {
    jobDetail,
    bottomButtonTyepe,
    handleUpdateJobModalOpen,
    handleApplyJobModalOpen,
  } = props;

  const handleUpdateModelOpen = () => {
    handleUpdateJobModalOpen(jobDetail);
  };

  const handleApplyModelOpen = () => {
    handleApplyJobModalOpen(jobDetail);
  };

  {
    return jobDetail ? (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={jobDetail.companyName}
          subheader={"sub headder"}
        />
        <CardMedia
          component="img"
          height="194"
          src={JobImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {jobDetail.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {bottomButtonTyepe === "apply" ? (
            <Tooltip title="apply">
              <IconButton
                onClick={handleApplyModelOpen}
                size="large"
                aria-label="add to favorites"
              >
                <AddToQueueSharpIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="update">
              <IconButton
                onClick={handleUpdateModelOpen}
                size="large"
                aria-label="add to favorites"
              >
                <UpdateSharpIcon />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      </Card>
    ) : null;
  }
};
export default SampleJob;
