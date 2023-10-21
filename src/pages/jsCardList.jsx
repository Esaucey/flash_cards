/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import jsData from '../data/jsCards.json';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { Button, Container, Pagination } from '@mui/material';
import usePagination from "../components/Pagination";
import Card from '../components/Card'
import ShowCards from '../components/showCards';

export const JsPage = () => {

  let [page, setPage] = useState(1);
  let [toggle, setToggle] = useState(null);

  const PER_PAGE = 9;

  const generalCount = Math.ceil(jsData.general.length / PER_PAGE);
  const general_DATA = usePagination(jsData.general, PER_PAGE);

  const regExCount = Math.ceil(jsData.regEx.length / PER_PAGE);
  const regEx_DATA = usePagination(jsData.regEx, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    general_DATA.jump(p);
  };
  const regExHandleChange = (e, p) => {
    setPage(p);
    regEx_DATA.jump(p);
  };

  const switchCards = () => {
    if (toggle == "general") {
      return <ShowCards _DATA={general_DATA} count={generalCount} page={page} handleChange={handleChange} />;
    } else if (toggle == "regEx") {
      return <ShowCards _DATA={regEx_DATA} count={regExCount} page={page} handleChange={regExHandleChange} />
    }
  }

  return (
    <Box>
      <Container sx={{margin: "30px"}}>
          <Button sx={{margin: "0 15px"}} variant="contained" onClick={() => setToggle("general")}>General</Button>
          <Button sx={{margin: "0 15px"}} variant="contained" onClick={() => setToggle("regEx")}>RegEx</Button>
      </Container>
      {toggle ? switchCards() : <ShowCards _DATA={general_DATA} count={generalCount} page={page} handleChange={handleChange} />}
    </Box>
  )
}
