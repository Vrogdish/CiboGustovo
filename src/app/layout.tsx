import Footer from "@/modules/Footer";
import Header from "../modules/Header";
import "./globals.css";
import { Roboto, Montserrat, Elsie } from "next/font/google";



export const metadata = {
  title: "Cibo Gustoso",
  description: "Restaurant italien",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
