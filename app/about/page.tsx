import styled from "./page.module.css";
import type { Metadata } from 'next'
// import { useRouter } from 'next/router'

export const metadata: Metadata = {
    title: 'Next 1.0 | AboutUs',
    description: 'Portfolio website About Us',
  }

export default function About() {
    // const router = useRouter()
    return (
        <div className={styled.about}>
            <div className={styled.container}>About Us</div>
        </div>
    );
}
