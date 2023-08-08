import style from "../styles/Burger.module.css";
import { Navbar } from "./Header";
import * as types from "../../../../shared/api/types";

type PropsType = {
    children: React.ReactNode;
    burger: boolean;
    setBurger: (a: boolean) => void;
};

export const Burger = ({ ...props }: PropsType) => {
    return (
        <div
            className={style.containerBurger}
            onClick={() => {
                props.setBurger(false);
            }}
            style={
                props.burger
                    ? { opacity: "1", pointerEvents: "all" }
                    : { opacity: "0", pointerEvents: "none" }
            }
        >
            <div
                className={style.burger}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                style={props.burger ? { width: "500px" } : { width: "0px" }}
            >
                {props.children}
            </div>
        </div>
    );
};
