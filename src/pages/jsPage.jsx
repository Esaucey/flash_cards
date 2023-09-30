import React, { useState } from 'react';
import jsData from '../data/jsCards.json';
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import { Container } from '@mui/material';
import "./jsPage.css";
import ReactCardFlip from "react-card-flip";

export const JsPage = () => {
  const [flip, setFlip] = useState(false);

  return (
    <Box>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 9, md: 12 }}>
          {jsData.map((item) => (
            <Grid xs={2} sm={3} key={item.id} className="flip-card">
              <ReactCardFlip isFlipped={flip} flipDirection="vertical">
              <Card variant="outlined" className="">
                <CardContent sx={{ padding: "0" }} className="flip-card-front" onClick={() => setFlip(!flip)}>
                  <Typography variant="h5">
                    {item.question}
                  </Typography>
                </CardContent>
                <CardContent sx={{ padding: "0" }} className="flip-card-back" onClick={() => setFlip(!flip)}>
                  <Typography sx={{ fontSize: "1em" }} variant="body2">
                    {item.answer}
                  </Typography>
                </CardContent> 
              </Card>
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
