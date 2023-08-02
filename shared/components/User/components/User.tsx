"use client";
import { useState, useEffect } from "react";

type Props = {
    id:number;
}

export default function UserReact({id}:Props) {
    const [user, setUser] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/artists/${id}`
                );
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching artists:", error);
            }
        };

        fetchData();
    }, []);

    if(user == undefined){
        return(
            <div>
                <h1>Данных пока нет</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>
                User page {id}
                <p>{user.name}</p>
            </h1>
        </div>
    );
}
