import React from "react";
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

import JobImage from "../../../static/job.jpg";
import { Tooltip } from "@mui/material";

const value = new Date();

const SampleJob = (props) => {
  const { jobDetail } = props;
  {
    return jobDetail ? (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={jobDetail.postedBy}
          subheader={jobDetail.postedDate}
        />
        <CardMedia
          component="img"
          height="194"
          src={JobImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {jobDetail.content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="apply">
            <IconButton size="large" aria-label="add to favorites">
              <AddToQueueSharpIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    ) : null;
  }
};
export default SampleJob;
