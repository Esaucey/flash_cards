import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import { Container, Pagination } from '@mui/material';
import Card from '../components/Card'

const ShowCards = ({ _DATA, count, page, handleChange }) => {
  return (
      <Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {_DATA.currentData().map((item) => {
          return (<Card cardData={ item } key={ item.id }/>)
        })}
      </Grid>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          sx={{padding: "20px"}}
        />
      </div>
    </Container>
  )
}

export default ShowCards
