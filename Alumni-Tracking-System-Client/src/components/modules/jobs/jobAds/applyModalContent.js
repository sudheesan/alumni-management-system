import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function ApplyJobModalContent(props) {
  const { jobDetail } = props;

  return ( jobDetail &&
    <Card>
      <CardHeader title="Apply Now" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jobDetail.title}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography paragraph>Job Description:</Typography>
        <Typography paragraph>
          {jobDetail.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
