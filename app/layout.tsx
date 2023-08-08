import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheFoooter } from "@/shared/components";
import { Header } from "@/widgets";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next 1.0",
    description: "Portfolio website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <center className={"center"}>{children}</center>
                <TheFoooter />
            </body>
        </html>
    );
}
