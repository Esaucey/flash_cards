/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid';
import { useState } from 'react'
import './cardFlip.css'


export default function JsCard({ cardData }) {
  const [ flip, setFlip ] = useState(false)

  return (
    <Grid xs={2} sm={4}>
      <div onClick={() => setFlip(!flip)} className={`card ${ flip ? 'flip' : ''}`}>
        <CardContent className="frontFlip">
          <Typography variant="h6" sx={{textAlign: "left"}}>
            {cardData.question}
          </Typography>
        </CardContent>
        <CardContent className="backFlip">
          <Typography sx={{ fontSize: "1.5em" }} variant="body2">
            {cardData.answer}
          </Typography>
        </CardContent>
      </div>
    </Grid>
  )
}
