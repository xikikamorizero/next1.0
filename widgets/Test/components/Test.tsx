"use client";
import React from 'react';
import { styled } from "styled-components";
import { useTest } from "../lib/hook";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const Test =()=>{
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
    useTest()
    return(
        <Container>
  <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
`