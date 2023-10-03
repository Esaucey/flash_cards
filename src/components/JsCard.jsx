import React from 'react'
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import { Container } from '@mui/material';

export default function JsCard({ jsData }) {
  return (
    <Grid xs={2} sm={3} className="flip-card">
      <Card variant="outlined" sx={{ minHeight: "200px" }}>
          <CardContent sx={{ padding: "0" }} className="flip-card-front">
            <Typography variant="h5">
              {jsData.question}
            </Typography>
          </CardContent>
          <CardContent sx={{ padding: "0" }} className="flip-card-back">
            <Typography sx={{ fontSize: "2em" }} variant="body2">
              {jsData.answer}
            </Typography>
          </CardContent>
      </Card>
    </Grid>
  )
}
