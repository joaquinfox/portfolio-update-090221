import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Joaquin Fox, portfolio</title>
      </Head>
      <Nav></Nav>
      <main className={Layout.main}>
        <h1>Portfolio</h1>
        <article>
          <div className="profile-pic-container">
            {/* <Image
              className="profile-pic"
              src="/images/profile1.jpg"
              width="150"
              height="150"
              layout=""
              alt="profile picture of provider 1"
            ></Image> */}
          </div>
          <h4>Fluid Aesthetics</h4>
          <p>
          React with Next.js, and CSS.
          </p>
        </article>
        <article>
          <div className="profile-pic-container">
            {/* <Image
              className="profile-pic"
              src="/images/profile2.jpg"
              width="150"
              height="150"
              layout=""
              alt="profile picture of provider 2"
            ></Image> */}
          </div>
          <h4>Project Two</h4>

          <p>
            sit amet consectetur adipisicing elit. Praesentium culpa distinctio
            non vitae iusto deleniti odit placeat? Cumque sint perspiciatis
            tempora
          </p>
        </article>
      </main>
      <Footer></Footer>

      <style jsx>{`
        .profile-pic-container {
          margin: auto;
        }
      
        
    
        }
      `}</style>
    </Layout>
  );
}
