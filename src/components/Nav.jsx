import { Box, Button, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <Box>
      <Container>
        <h2>Flash Cards</h2>
        <ul style={ulStyle}>
          <li><Link to="./js-quiz"><Button variant="contained" size="medium" sx={{minWidth: "150px"}}>Javascript</Button></Link></li>
          <li><Link to="/html-quiz"><Button variant="contained" size="medium" sx={{minWidth: "150px"}}>HTML</Button></Link></li>
          <li><Button variant="contained" size="medium" sx={{minWidth: "150px"}}>CSS</Button></li>
        </ul>
      </Container>
    </Box>
  )
}

const ulStyle = {
  padding: "2rem",
  listStyleType: "none",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
}
