import styled from "../styles/News.module.css";

type Props={
    title?:string;
    description?:string;
}

export const NewsItem = ({...props}:Props) => {
    return (
        <div className={styled.container}>
            <h1 className={styled.title}>{props.title}</h1>
            <p className={styled.text}>{props.description}</p>
        </div>
    );
};

