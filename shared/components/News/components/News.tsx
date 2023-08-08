import styled from "../styles/News.module.css";
import * as types from "../../../../shared/api/types";

type Props = {
    setPage: (a: types.NewsItem) => void;
    data: types.NewsItem;
};

export const NewsItem = ({ ...props }: Props) => {
    return (
        <div
            className={styled.container}
            onClick={() => {
                props.setPage(props.data);
            }}
        >
            <img src={props.data.urlToImage} draggable={false} />
            <h1 className={styled.title}>{props.data.title}</h1>
            <p className={styled.description}>{props.data.description}</p>
        </div>
    );
};
