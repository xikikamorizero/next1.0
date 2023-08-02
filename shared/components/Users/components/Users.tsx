'use client'
import { useState, useEffect } from "react";
import { News } from "@/shared/api/services";

export default function UsersReact() {

    const [users, setUsers] = useState<any>([]);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await News.TopStories({limit:10});
            const data = await response;
            setUsers(data);
          } catch (error) {
            console.error('Error fetching artists:', error);
          }
        };
    
        fetchData();
      }, []);
      
      console.log(users)
  
    return (
        <div>
            <h1>Users</h1>
            {/* <ul>
                {users.map((user: any, i) => (
                    <li key={i}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
