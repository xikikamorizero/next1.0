import { useContext, useEffect } from "react";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "./context";

export const useAllNews = () => {
    const { store } = useContext(Context);
    const global = useContext(globalContext);

    useEffect(() => {
        global.store.news
            .getAllNews({
                language: store.language,
                q:'a'
            })
            .then((response: any) => {
                store.setList(response.data.articles);
                console.log(response.data.articles);
            });
    }, []);

    return store.list;
};
