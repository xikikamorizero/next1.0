import style from "../styles/NewsPage.module.css";
import * as types from "../../../api/types";

type Props = {
    children?: React.ReactNode;
    setPage?: (a: types.NewsItem | null) => void;
};
export const NewsPage = ({ children, setPage }: Props) => {
    return (
        <div
            className={style.container}
            onClick={() => {
                setPage ? setPage(null) : null;
            }}
        >
            <div
                className={style.exit}
                onClick={() => {
                    setPage ? setPage(null) : null;
                }}
            >
                <div className={style.close} />
            </div>
            <div
                className={style.windowNews}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
};
