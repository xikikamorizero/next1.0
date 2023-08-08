import styles from "./page.module.css";
import { LastNews } from "@/widgets";


export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <LastNews />
            </div>
        </main>
    );
}
