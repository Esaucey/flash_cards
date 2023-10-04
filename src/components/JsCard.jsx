/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Box from '@mui/system/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import { useState } from 'react'
import { Container } from '@mui/material';
import './cardFlip.css'


export default function JsCard({ jsData }) {
  const [ flip, setFlip ] = useState(false)

  return (
    <Grid xs={2} sm={3}>
      <div onClick={() => setFlip(!flip)} className={`card ${ flip ? 'flip' : ''}`}>
        <CardContent className="frontFlip">
          <Typography variant="h5">
            {jsData.question}
          </Typography>
        </CardContent>
        <CardContent className="backFlip">
          <Typography sx={{ fontSize: "2em" }} variant="body2">
            {jsData.answer}
          </Typography>
        </CardContent>
      </div>
    </Grid>
  )
}
