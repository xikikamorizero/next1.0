import { useContext, useEffect, useRef, useState } from "react";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "./context";
import { debounce } from "lodash";

export const useLastNews = () => {
    const { store } = useContext(Context);
    const global = useContext(globalContext);

    const [prevCount, setPrevCount] = useState(store.q);

    function ResponseLastnews(isMounted: boolean) {
        if (isMounted) {
            store.setLoader(true);
            global.store.news
                .getTopHeadlines({
                    q: store.q ? store.q : "a",
                    category: store.category,
                    page: store.page,
                })
                .then((response) => {
                    if (isMounted) {
                        store.setPageCount(
                            Math.ceil(
                                response.data.totalResults > 100
                                    ? 5
                                    : response.data.totalResults / 20
                            )
                        );
                        store.setList(response.data.articles);
                    }
                })
                .catch((error) => {
                    if (isMounted) {
                        console.error(error);
                    }
                })
                .finally(() => {
                    if (isMounted) {
                        store.setLoader(false);
                    }
                });
        }
    }

    const delayedSearch = debounce((isMounted: boolean) => {
      ResponseLastnews(isMounted);
    }, 500);

    useEffect(() => {
        let isMounted = true;

        ResponseLastnews(isMounted);

        return () => {
            isMounted = false;
        };
    }, [store.page, store.category]);

    useEffect(() => {
        let isMounted = true;

        if (prevCount !== store.q) {
            delayedSearch(isMounted);
        }

        setPrevCount(store.q);

        return () => {
            isMounted = false;
            delayedSearch.cancel();
        };
    }, [store.q]);

    // useEffect(() => {
    //     if (prevCount !== store.category) {
    //         store.setPage(2);
    //     }
    //     setPrevCount(store.category);
    // }, [store.category]);

    return {
        list: store.list,
        loader: store.loader,
        q: store.q,
        setQ: store.setQ,
        pageList: store.page,
        setPageList: store.setPage,
        pageCount: store.pageCount,
    };
};
