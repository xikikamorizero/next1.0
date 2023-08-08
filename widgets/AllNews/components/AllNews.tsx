'use client'
import { useState, useEffect } from "react";
import { useAllNews } from "../lib/hook";
import { NewsItem } from "@/shared/components";
import { observer } from "mobx-react-lite";

export const AllNews=observer(()=> {

    const list = useAllNews()
    return (
        <div>
{/* {list.map((news,i)=><NewsItem description={news.description} key={i} />)}         */}
        </div>
    );
})
