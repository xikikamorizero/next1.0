"use client";
import { useState, useEffect } from "react";
import { TheHeader } from "@/shared/components";
import { styled } from "styled-components";
import { observer } from "mobx-react-lite";
import * as types from "../../../../shared/api/types";
import style from "../styles/Header.module.css";
import Link from "next/link";
import { Burger } from "./Burger";

type Props = {
    filter: types.categories | null;
    setFilter: (a: types.categories | null) => void;
    burgerStyle?: React.CSSProperties;
    setBurger?:(a:boolean)=>void;
};

export const Header = observer(({ filter, setFilter }: Props) => {
    const [burger, setBurger] = useState(false);

    return (
        <TheHeader>
            <div className={style.containerMain}>
                <Link href={"/"} className={style.logo}>
                    NEWS
                </Link>
                <Navbar filter={filter} setFilter={setFilter} />
                <div
                    className={style.block}
                    onClick={() => {
                        setBurger(!burger);
                    }}
                >
                    <div
                        className={
                            burger ? style.burgerIconActive : style.burgerIcon
                        }
                    />
                </div>
                <Burger burger={burger} setBurger={setBurger}>
                    <Navbar
                        filter={filter}
                        setFilter={setFilter}
                        setBurger={setBurger}
                        burgerStyle={{
                            position:'absolute',
                            top:'50%',
                            left:'50%',
                            transform:'translate(-50%, -50%)',
                            flexDirection: "column",
                            justifyContent:"space-between",
                            alignItems:"center",
                            display: "flex",
                            height:"300px",
                            borderBottom:'0px solid white'
                        }}
                    />
                </Burger>
            </div>
        </TheHeader>
    );
});

export const Navbar = ({ filter, setFilter, burgerStyle, setBurger }: Props) => {
    const StateControlStyle = (state: types.categories | null) => {
        return state == filter ? "1" : undefined;
    };
    return (
        <div className={style.container} style={burgerStyle}>
            <div
                className={style.item}
                style={
                    StateControlStyle("business")
                        ? { borderBottom: "1px solid var(--white)" }
                        : {}
                }
                onClick={() => {
                    StateControlStyle("business")
                        ? setFilter(null)
                        : setFilter("business");
                        setBurger? setBurger(false): null;
                }}
            >
                бизнес
            </div>
            <div
                className={style.item}
                style={
                    StateControlStyle("entertainment")
                        ? { borderBottom: "1px solid var(--white)" }
                        : {}
                }
                onClick={() => {
                    StateControlStyle("entertainment")
                        ? setFilter(null)
                        : setFilter("entertainment");
                        setBurger? setBurger(false): null;
                }}
            >
                развлечения
            </div>
            <div
                className={style.item}
                style={
                    StateControlStyle("health")
                        ? { borderBottom: "1px solid var(--white)" }
                        : {}
                }
                onClick={() => {
                    StateControlStyle("health")
                        ? setFilter(null)
                        : setFilter("health");
                        setBurger? setBurger(false): null;
                }}
            >
                здоровье
            </div>
            <div
                className={style.item}
                style={
                    StateControlStyle("science")
                        ? { borderBottom: "1px solid var(--white)" }
                        : {}
                }
                onClick={() => {
                    StateControlStyle("science")
                        ? setFilter(null)
                        : setFilter("science");
                        setBurger? setBurger(false): null;
                }}
            >
                наука
            </div>
            <div
                className={style.item}
                style={
                    StateControlStyle("sports")
                        ? { borderBottom: "1px solid var(--white)" }
                        : {}
                }
                onClick={() => {
                    StateControlStyle("sports")
                        ? setFilter(null)
                        : setFilter("sports");
                        setBurger? setBurger(false): null;
                }}
            >
                спорт
            </div>
            <div
                className={style.item}
                style={
                    StateControlStyle("technology")
                        ? { borderBottom: "1px solid var(--white)" }
                        : {}
                }
                onClick={() => {
                    StateControlStyle("technology")
                        ? setFilter(null)
                        : setFilter("technology");
                        setBurger? setBurger(false): null;
                }}
            >
                технологии
            </div>
            <Link href={"/about"} className={style.item} onClick={()=>{ setBurger? setBurger(false): null;}}>
                О нас
            </Link>
        </div>
    );
};
