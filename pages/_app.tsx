import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ToastContainer } from "react-toastify";
import { Gotu } from "@next/font/google";
import TopBar from "../components/layout/TopBar";

const gotu = Gotu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gotu",
  display: "swap",
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<any>) {
  return (
    <main className={gotu.variable}>
      <SessionProvider session={session}>
        <TopBar />
        <Header />
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" />
        <Footer />
      </SessionProvider>
    </main>
  );
}
