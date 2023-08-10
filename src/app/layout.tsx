import Footer from "@/modules/Footer";
import Header from "../modules/Header";
import "./globals.css";
import { Roboto, Montserrat, Elsie } from "next/font/google";
import BurgerMenu from "@/components/hook/burgerMenu/BurgerMenu";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const elsie = Elsie({
  weight: "900",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

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
