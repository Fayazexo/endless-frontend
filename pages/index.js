import Head from "next/head";
import Header from "../components/Header";
import LoginContent from "../components/LoginContent";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Endless CMS</title>
        <meta
          name="description"
          content="Candyplex - Stream high quality movies anywhere"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <LoginContent />
      </main>
    </div>
  );
}
