'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "../styles/Header.module.css";   

export const TheHeader = () => {
    const [scrolled, setScrolled] = useState(false);
        
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
        <div
            className={styled.header}
            style={scrolled ? { background: "var(--mainColorOn)" } : {}}
        >
            <div className={styled.container}>
                <Link
                    href={"/"}
                    className={styled.link}
                >
                    Main
                </Link>
                <Link
                    href={"/news"}
                    className={styled.link}
                >
                    News
                </Link>
                <Link
                    href={"/"}
                    className={styled.link}
                >
                    Info
                </Link>
                <Link
                    href={"/about"}
                    className={styled.link}
                >
                    About Me
                </Link>
            
            </div>
        </div>
    );
};
