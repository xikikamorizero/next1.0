import { useContext, useEffect, useState, useRef } from "react";
import { Context } from "./context";
import axios from "axios";

export const useTest = () => {

  const [fetching, setFetching] = useState(true);

  const { store } = useContext(Context);
  useEffect(()=>{
    console.log(111)
  }, [])

  useEffect(() => {
    let isMounted = true;
    if (fetching && isMounted) {
      if (store.pageCount === null || store.page <= store.pageCount) {
        store.setLoader(store.page);
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
            if (isMounted) {
              console.log(response)
              // store.setList([...store.list, ...response.data.articles]);
              // store.setPageCount(Math.ceil(response.data.totalResults / 20));
              // store.setPage(store.page + 1);
            }
          })
          .catch((error) => {
            if (isMounted) {
              console.error(error);
            }
          }).finally(()=>{
            if (isMounted) {
              store.setLoader(false);
              setFetching(false);
            }
          });
      }
    }

    return () => {
      isMounted = false;
    };
  }, [fetching]);

  useEffect(() => {
    const scrollHandler = (e:any) => {
      if (
        e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true); 
      }
    };

    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { list: store.list, loader: store.loader, q:store.q, setQ: store.setQ };
};
