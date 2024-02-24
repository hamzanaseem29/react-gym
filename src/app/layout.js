import {  Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700" , "800", "900"] });

export const metadata = {
  title: "Spotta",
  description: "FIND THE BEST TRAINER FOR YOU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
