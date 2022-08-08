import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function ApplyJobModalContent(props) {
  const { jobDetail } = props;

  return (
    <Card>
      <CardHeader title="Apply Now" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jobDetail.companyName}
        </Typography>
      </CardContent>
     
      <CardContent>
        <Typography paragraph>Description:</Typography>
        <Typography paragraph>
          {jobDetail.description}
        </Typography>
        <Typography  paragraph>
        
        </Typography>
      </CardContent>
    </Card>
  );
}
