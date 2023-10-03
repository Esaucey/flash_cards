import React, { useState } from 'react';
import jsData from '../data/jsCards.json';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import { Container } from '@mui/material';
// import "./jsPage.css";
// import ReactCardFlip from "react-card-flip";
import JsCard from '../components/jsCard';

export const JsPage = () => {
  // const [flip, setFlip] = useState(false);

  return (
    <Box>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 9, md: 12 }}>
          {jsData.map((item) => {
            return <JsCard jsData={ item } key={item.id }/>
          })}
        </Grid>
      </Container>
    </Box>
  )
}
