import Head from "next/head";
import Banner from "../components/Home/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoga App</title>
        <meta
          name="description"
          content="Online yoga course and appointment booking website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
      </main>
    </div>
  );
}
