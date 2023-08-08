import { useContext, useEffect, useState, useRef } from "react";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "./context";
import { observer } from "mobx-react-lite";

export const useLastNews = () => {

  const { store } = useContext(Context);
  const global = useContext(globalContext);
 

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
        store.setLoader(true);
        global.store.news
          .getTopHeadlines({
            q: store.q? store.q : 'a',
            category: store.category,
            page: store.page
          })
          .then((response) => {
            if (isMounted) {
              store.setPageCount(Math.ceil(100 / 20));
              store.setList(response.data.articles);
            }
          })
          .catch((error) => {
            if (isMounted) {
              console.error(error);
            }
          }).finally(()=>{
            if (isMounted) {
              store.setLoader(false);
            }
          });
    }

    return () => {
      isMounted = false;
    };
  }, [store.page]);


  return { list: store.list, loader: store.loader, q:store.q, setQ: store.setQ, pageList:store.page, setPageList:store.setPage, pageCount:store.pageCount };
};
