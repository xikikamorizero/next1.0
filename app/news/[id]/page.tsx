import { Metadata } from "next";

type Props={
    params:{
        id:string;
    }
}

export async function generateMetadata({
    params:{id},
}:Props):Promise<Metadata>{
    return{
        title: `User ${id}`
    }
}

export default function News({params:{id}}:Props){

    return(
    <div>

    </div>
)
}