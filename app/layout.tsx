import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Sazzad Hossain — AI Automation Specialist",description:"Professional portfolio of Sazzad Hossain."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}