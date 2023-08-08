import styled from "../styles/Header.module.css";

type Props = {
    children?:React.ReactNode;
};

export const TheHeader = ({ ...props }: Props) => {
    return (
        <div className={styled.header}>
           {props.children}
        </div>
    );
};
