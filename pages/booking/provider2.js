import Head from "next/head";
import Layout from "../../styles/components/layout";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function provider2() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Provider 2</title>
      </Head>
      <Nav></Nav>
      <main className={Layout.main}>
          <h4>hanga banga</h4>
          <div>
              <button><a href="https://calendly.com/joaquin-fox/new-patient-consultation">option 1</a></button>
          </div>
          <div>
              <button><a href="https://calendly.com/joaquin-fox/30min">option 2</a></button>
          </div>
          <div>
              <button><a href="https://calendly.com/joaquin-fox/60min">option 3</a></button>
          </div>
      </main>
      <Footer></Footer>
    </Layout>
  );
}
