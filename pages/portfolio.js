import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
// import Link from "next/link";

export default function Portfolio() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Joaquin Fox, portfolio</title>
      </Head>
      <Nav></Nav>
      <main className={Layout.main}>
        <h1>Sample Projects</h1>
        <article>
          <h4>Fluid Aesthetics</h4>
          <div className="article-container">
            <a
              href="https://fluid-aesthetics.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="thumbnail-image-container">
                <Image
                  src="/images/fluidaesthetics.jpg"
                  width="600"
                  height="600"
                  alt="link image to fluidaesthetics.com"
                ></Image>
              </div>
            </a>

            <p>
              Built with React and styled with vanilla CSS, Fluid Aesthetics is
              a landing page and appointment scheduling app for a cosmetics
              business. Next.js is used for its SEO optimizing features,
              bundling and fast user interactions.{" "}
            </p>
            <ul>
              <li>
                See it{" "}
                <a
                  href="https://fluid-aesthetics.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live{" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/joaquinfox/fluid-aesthetics">
                  Codebase
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>
      <Footer></Footer>

      <style jsx>{`
      .article-container{
        display:flex;
      }
  
      .thumbnail-image-container{
        box-shadow: 0.5rem 0.25rem 0.5rem 0.5rem #eaeaea;
        transition: all 0.15s linear;
      }

      .thumbnail-image-container:hover{
        box-shadow: 0.5rem 0.25rem 0.5rem 0.5rem #4D4B4B;
      }

      p {
        text-align:left;
        margin-left:5%;
        padding-right:5%;
        line-height:2;
        border-right: 1px solid #aeaeae;
      }

   

      ul > li{
        list-style:none;
        padding:5% 0;
        margin:50% 0;
      }

      @media (max-width:1000px){
        .article-container{
          flex-direction:column;
          justify-content: center;
          align-items:center;
        }
     
        .thumbnail-image-container { 
           width: 10rem;
        }
        p{
          border:none;
          margin:5%;
          text-align:center;
          padding:5%;
        }
        ul > li{
          margin:0;
        }
        ul>li:nth-child(2){
          border-top:1px solid #eaeaea;
          margin-top:5%;
        }

      }
        
    
        }
      `}</style>
    </Layout>
  );
}
