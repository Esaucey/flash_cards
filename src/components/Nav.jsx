import { Box, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <Box>
      <Container>
        <ul style={ulStyle}>
          <li><Link to="./js-quiz"><Button variant="contained" size="medium" sx={buttonStyle}>Javascript</Button></Link></li>
          <li><Link to="/html-quiz"><Button variant="contained" size="medium" sx={buttonStyle}>HTML</Button></Link></li>
          <li><Button variant="contained" size="medium" sx={buttonStyle}>CSS</Button></li>
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

const buttonStyle = {
  minWidth: "150px",
  backgroundColor: "rgb(109, 179, 207)",
  color: "white",
}