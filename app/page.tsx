import Image from "next/image";
import styles from "./page.module.css";
import { NewsItem } from "@/shared/components";
import { LastNews, Test } from "@/widgets";


export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <LastNews />
            </div>
        </main>
    );
}
