import styled from "../styles/GridContainer.module.css";

type Props = {
    children?: React.ReactNode;
};

export const GridContainer = ({ children }: Props) => {
    return <div className={styled.container}>{children}</div>;
};
