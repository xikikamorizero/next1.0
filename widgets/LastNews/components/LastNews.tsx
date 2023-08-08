"use client";
import { NewsPage } from "@/entities";
import { useLastNews } from "../lib/hook";
import { NewsItem } from "@/shared/components";
import { GridContainer } from "@/shared/components";
import { observer } from "mobx-react-lite";
import {useState } from "react";
import styled from "styled-components";
import * as types from "../../../shared/api/types";
import { Preloader } from "@/shared/components";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const LastNews = observer(() => {
    const [page, setPage] = useState<types.NewsItem | null>(null);
    const { list, loader, q, setQ, pageList, setPageList, pageCount } = useLastNews();

    if (loader == true) return <Preloader />;

    if (list.length === 0 || list.length === undefined) {
        return <NotFount>Новостей нет</NotFount>;
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageList(value);
      };

    return (
        <Container page={page}>
            <TitleContainer>
                <Title>Последние новости </Title>
                <Input
                    type="text"
                    placeholder={"Поиск"}
                    onChange={(e) => {
                        setQ(e.target.value);
                    }}
                    value={q}
                />
            </TitleContainer>
            {page ? <NewsPage newsData={page} setPage={setPage} /> : null}
            <GridContainer>
                {list.map((news, i) => (
                    <NewsItem setPage={setPage} data={news} key={i} />
                ))}
            </GridContainer>
            <Stack spacing={2}>
                <Typography>Page: {pageList}</Typography>
                <Pagination count={pageCount} page={pageList} onChange={handleChange} />
            </Stack>
        </Container>
    );
});

const Container = styled.div<{ page: types.NewsItem | null }>`
    width: 100%;
    min-height: 100vh;
    max-height: ${(props) => (props.page ? "100vh" : "auto")};
    overflow-y: hidden;
    padding: 2vw 0;
`;
const Title = styled.div`
    width: max-content;
    color: black;
    font-size: 30px;
    font-weight: 600;

    @media (max-width:550px) {
        font-size: 20px;
    }
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
    margin: 2vw 0 1.5vw 0;
`;
const Input = styled.input`
    min-width: 120px;
    width: 13%;
    padding: 5px;
    border-radius: 10px;
`;
//Not fount Page 
const NotFount = styled.div`
    color:black;
    font-size: 30px;
    padding-top: 2vw;
`