import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";

export default function Test() {
  // let iconStyles = { fontSize: "2rem", color: "red" };
  // <IconContext.Provider value={{ className: "myReact-icons" }}>
  //   <RiMailLine />
  //   <FaGithub />
  //   <FaLinkedin />
  // </IconContext.Provider>;
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>For Employers</title>
      </Head>
      <Nav></Nav>
      <main className={Layout.main}>
        <article>
          <Image
            className="profile-pic"
            src="/images/profilepic2.JPG"
            width="150"
            height="150"
            layout=""
            alt="profile picture of Joaquin Fox"
          ></Image>
          <h4>Joaquin Fox</h4>
          <div className="socialLinks">
            <span>
              {" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/joaquinfox"
              >
                <FaGithub />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="https://www.linkedin.com/in/joaquin-fox-203182178/">
                <FaLinkedin />
              </a>{" "}
            </span>
            <span>
              {" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="mailto:joaquin.fox@gmail.com"
              >
                <RiMailLine />
              </a>{" "}
            </span>
          </div>
          <p>
            Welcome and thank you for visiting my portfolio site. I am a full
            stack, web and applications developer, with 6 years experience,
            mostly in a JavaScript ecosystem. I am fascinated by all things
            compute, and I love collaborating with others. If you have a project{" "}
            <span className="white-font">
              or an opportunity you would like to talk over, please
              <a href="mailto:joaquin.fox@gmail.com"> email</a> me. I look me. I
              look forward to connecting.
            </span>
          </p>

          <p>
            <span className="white-font">
              <h4>Experience/education. </h4>I offer custom web and application
              development through my company joaquinfox.com. Previously I have
              worked in corporate accounting and education. You can see my
              resume
              <a
                href="./joaquinfox_cv.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                here
              </a>
              .
            </span>
          </p>
          <p>
            <span className="white-font">
              I have degrees in economics and finance, both from the University
              of Arizona and I am fluent in Spanish.
            </span>
          </p>
          <p></p>
          <h4 id="myStack">Expertise</h4>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>CSS</li>
            <li>Express</li>
            <li>Next.JS</li>
            <li>JavaScript</li>
            <li>Responsive Web Design</li>
            <li>Accessability</li>
            <li>SEO</li>
            <li>UX/UI</li>
            <li>Customized Web  Development</li>
            <li>Version Control</li>
            <li>Agile</li>
          </ul>
        </article>
      </main>
      <Footer></Footer>
      <style jsx>{`
        .socialLinks {
          margin-bottom: 10%;
          display: flex;
          width: 30%;
          margin: auto;
        }
        .socialLinks > span {
          flex-basis: 50%;

          margin: 0;
        }
        .socialLinks > span > a {
          height: 10px;
          font-size: 2rem;
          transition: color 0.15s, background-color 0.5s, border 0.5s;
          transition-timeing-function: ease-in;
          position: relative;
          top: 8%;
        }
        .socialLinks > span > a:hover {
          color: white;
          background-color: #0070f3;
          border: 1px solid black;
          border-radius: 0% 10% 0% 40%;
        }

        article {
          width: 80%;
          margin: auto;
        }
        article > p {
          text-align: left;
          line-height: 3;
        }

        ul {
          display: grid;
          grid-template-columns: repeat(2, 50%);
          grid-template-rows: repeat(7, 10%);
          grid-gap: 1rem;
          margin-bottom: 10%;
          padding-right: 10%;
          justify-content: center;
        }

        ul > li {
          list-style: none;
          box-shadow: 0.5rem 0.25rem 0.5rem 0.5rem #eaeaea;
          transition: all 0.15s linear;
          padding: 5%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        ul > li:hover {
          box-shadow: 0.5rem 0.25rem 0.5rem 0.3rem #4d4b4b;
        }
        .white-font {
          color: white;
        }

        #myStack {
          text-align: left;
          font-size: 2rem;
        }
        @media (max-width: 800px) {
          article > p {
            text-align: center;
            line-height: 2;
          }
          .socialLinks > span > a {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 600px) {
          ul {
            padding-right: 15%;
          }
          ul > li {
            padding: 10%;
            
            font-size: 80%;
          }
          article > p {
            text-align: center;
          }
          .socialLinks {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}
