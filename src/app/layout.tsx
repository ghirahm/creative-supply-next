import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Creative Supply Indonesia",
    description: "Creative Agency PT Kreatif Suplai Indonesia",
    keywords: "creative agency, Indonesia, digital marketing, content creation, branding",
    creator: "PT Kreatif Suplai Indonesia",
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    icons: {
        icon: "/logo.ico",
        apple: "/logo.ico",
        shortcut: "/logo.ico"
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
