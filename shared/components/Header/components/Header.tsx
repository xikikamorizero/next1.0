import Link from "next/link";
import styled from "../styles/Header.module.css";

type Props = {
    scroll: boolean;
    children?:React.ReactNode;
};

export const TheHeader = ({ scroll, children }: Props) => {
    return (
        <div
            className={styled.header}
            style={scroll ? { background: "var(--mainColorOn)" } : {}}
        >
            <div className={styled.container}>
                <Link href={"/"} className={styled.logo}>NEWS</Link>
                   {children}
                <div className={styled.block}></div>
            </div>
        </div>
    );
};
