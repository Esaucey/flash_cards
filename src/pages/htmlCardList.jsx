/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import htmlData from '../data/htmlCards.json';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Container, Pagination } from '@mui/material';
import usePagination from "../components/Pagination";
import Card from '../components/Card'

export const HtmlPage = () => {

  let [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const count = Math.ceil(htmlData.length / PER_PAGE);
  const _DATA = usePagination(htmlData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {_DATA.currentData().map((item) => {
            return (<Card cardData={ item } key={item.id }/>)
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
    </Box>
  )
}
