import { NewsPage as PageContainer } from "@/shared/components";
import style from "../styles/NewsPage.module.css";
import * as types from "../../../../shared/api/types";

type Props = {
    newsData: types.NewsItem;
    setPage: (a: types.NewsItem | null) => void;
};

export const NewsPage = ({ newsData, setPage }: Props) => {
    return (
        <PageContainer setPage={setPage}>
            <div className={style.container}>
                <img className={style.poster} src={newsData.urlToImage} />
                <div className={style.title}>{newsData.title}</div>
                <div className={style.description}>{newsData.description}</div>
                <div className={style.content}>{newsData.content}</div>
                <div className={style.detailInfo}>
                    <div className={style.date}>{newsData.publishedAt}</div>
                    <div className={style.author}>{newsData.author}</div>
                </div>
            </div>
        </PageContainer>
    );
};
