import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

export default function ForEmployers() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Joaquin Fox, for Employers</title>
      </Head>
      <Nav></Nav>
      <main className={Layout.main}>
        <h1>For Employers</h1>
        <article>
          <div className="profile-pic-container">
            <Image
              className="profile-pic"
              src="/images/profilepic2.JPG"
              width="150"
              height="150"
              layout=""
              alt="profile picture of provider 1"
            ></Image>
          </div>
          <h4>Joaquin Fox</h4>
          <div className="socialLinks">
            <span>
              {" "}
              <a href="">gh</a>{" "}
            </span>
            <span>
              {" "}
              <a href="">li</a>{" "}
            </span>
            <span>
              {" "}
              <a href="">email</a>{" "}
            </span>
            <span>
              {" "}
              <a href="">CV</a>{" "}
            </span>
            {/* <span>
              {" "}
              <a href="">joaquinfox.com</a>{" "}
            </span> */}
          </div>
          <p>
          I am a full stack software engineer and web developer, with six years of experience coding in the JavaScript universe. 
          </p>
        </article>
      </main>
      <Footer></Footer>

      <style jsx>{`
        .profile-pic-container {
          margin: auto;
        }
 .socialLinks>span{
  //  margin:auto;
  padding:3%
 }

        }
      `}</style>
    </Layout>
  );
}
