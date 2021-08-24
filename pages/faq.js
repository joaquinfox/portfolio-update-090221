import Head from "next/head";
import Layout from "../styles/components/layout";
import Link from "next/link";

export default function Faq() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Fluid Aesthetics, About</title>
      </Head>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main className={Layout.main}>
        <h1>FAQ</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          culpa distinctio non vitae iusto deleniti odit placeat? Cumque sint
          perspiciatis tempora repellat atque pariatur. Sapiente unde rem illum
          culpa dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          culpa distinctio non vitae iusto deleniti odit placeat? Cumque sint
          perspiciatis tempora repellat atque pariatur. Sapiente unde rem illum
          culpa dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          culpa distinctio non vitae iusto deleniti odit placeat? Cumque sint
          perspiciatis tempora repellat atque pariatur. Sapiente unde rem illum
          culpa dolorum?
        </p>
      </main>
    </Layout>
  );
}
