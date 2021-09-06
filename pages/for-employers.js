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
          <h4>Emma James</h4>
          <p>
            Lorem ipsum dolopellat atque pariatur. Sapiente unde rem illum culpa
            dolorum?
          </p>
          <button>
            <Link href="/booking/provider1">
              <a>Book with Emma</a>
            </Link>
          </button>
        </article>
      
      </main>
      <Footer></Footer>

      <style jsx>{`
        .profile-pic-container {
          margin: auto;
        }
        button {
          margin: auto;
          padding: 2% 3%;
          background-color:#0070f3;
          color:white;
          border-radius:4%;
          letter-spacing:2px;
          font-weight: bold;
          text-transform: uppercase;
          border: none;
          transition: all 0.15s linear;
          font-size:0.75rem
        }
        
        button:hover{
          color:#0070f3;
          background-color:white;
          border: 1px solid #0070f3;
        }
        @media (max-width: 600px){
          button{
            width:30%;
          padding:auto;}
        }
        }
      `}</style>
    </Layout>
  );
}
