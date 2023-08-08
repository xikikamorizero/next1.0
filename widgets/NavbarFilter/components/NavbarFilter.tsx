'use client';
import { useContext } from "react";
import { Context } from "../../LastNews/lib/context";
import { Header as TheHeader } from "@/entities";
import { observer } from "mobx-react-lite";

export const Header=observer(()=>{
    const { store } = useContext(Context);
    return(
     <TheHeader filter={store.category} setFilter={store.setCategory} />
    )
})