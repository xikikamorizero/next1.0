"use client";
import { useState, useEffect } from "react";
import { TheHeader } from "@/shared/components";
import { styled } from "styled-components";
import { observer } from "mobx-react-lite";
import * as types from "../../../../shared/api/types";
import style from "../styles/Header.module.css";

type Props = {
    filter: types.categories | null;
    setFilter: (a: types.categories | null) => void;
};

export const Header = observer(({ filter, setFilter }: Props) => {
    const [scrolled, setScrolled] = useState(false);
    const StateControlStyle = (state: types.categories | null) => {
        return state == filter ? "1" : undefined;
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <TheHeader scroll={scrolled}>
            <div className={style.container}>
                <div
                    className={style.item}
                    style={StateControlStyle("business")? {borderBottom:'1px solid var(--white)'}:{}}
                    onClick={() => {
                        StateControlStyle("business")
                            ? setFilter(null)
                            : setFilter("business");
                    }}
                >
                    бизнес
                </div>
                <div
                    className={style.item}
                    style={StateControlStyle("entertainment")? {borderBottom:'1px solid var(--white)'}:{}}
                    onClick={() => {
                        StateControlStyle("entertainment")
                            ? setFilter(null)
                            : setFilter("entertainment");
                    }}
                >
                    развлечения
                </div>
                <div
                    className={style.item}
                    style={StateControlStyle("health")? {borderBottom:'1px solid var(--white)'}:{}}
                    onClick={() => {
                        StateControlStyle("health")
                            ? setFilter(null)
                            : setFilter("health");
                    }}
                >
                    здоровье
                </div>
                <div
                    className={style.item}
                    style={StateControlStyle("science")? {borderBottom:'1px solid var(--white)'}:{}}
                    onClick={() => {
                        StateControlStyle("science")
                            ? setFilter(null)
                            : setFilter("science");
                    }}
                >
                    наука
                </div>
                <div
                    className={style.item}
                    style={StateControlStyle("sports")? {borderBottom:'1px solid var(--white)'}:{}}
                    onClick={() => {
                        StateControlStyle("sports")
                            ? setFilter(null)
                            : setFilter("sports");
                    }}
                >
                    спорт
                </div>
                <div
                    className={style.item}
                    style={StateControlStyle("technology")? {borderBottom:'1px solid var(--white)'}:{}}
                    onClick={() => {
                        StateControlStyle("technology")
                            ? setFilter(null)
                            : setFilter("technology");
                    }}
                >
                    технологии
                </div>
            </div>
        </TheHeader>
    );
});

const Container = styled.div`
    width: 60%;
    min-width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`;
const Item = styled.div<{ state?: string }>`
    color: var(--white);
    font-size: 20px;
    text-transform: uppercase;

    border-bottom: ${(props) => (props.state ? "1px" : "0px")} solid
        var(--white);
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid var(--white);
    }
`;
