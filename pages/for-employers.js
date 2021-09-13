import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { IconContext } from "react-icons";
export default function testpage() {
  let iconStyles = { fontSize: "2rem", color: "red" };
  // <IconContext.Provider value={{ className: "myReact-icons" }}>
  //   <RiMailLine />
  //   <FaGithub />
  //   <FaLinkedin />
  // </IconContext.Provider>;
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>About</title>
      </Head>
      <Nav></Nav>
      <main classnMae={Layout.main}>
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
          <p className="testclass">
            I am a full stack web developer with six years of programming
            experience. I offer custom web and application developement through
            my company{" "}
            <a href="" target="_blank" rel="noreferrer noopener">
              joaquinfox.com
            </a>{" "}
            .
          </p>
          <p>
            Outside of work, I meet regularly with a team of international
            developers for standups, code reviews and collaborative projects. We
            coordinate on a private slack channel hosted by{" "}
            <a href="codebuddies.org">codebuddies.org</a>. Are you interested in
            joining an accountability team? We are looking for new members. Send
            me an email if you would like to know more, subject "accountability
            team".
          </p>

          <p>
            I have degrees in economics and finance and experience in corporate
            accounting and education. You can see my resume
            <a
              href="./joaquinfox_cv.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              here
            </a>
            .
          </p>
          <p>
            Have a project or opportunity to discuss? Please{" "}
            <a href="mailto:joaquin.fox@gmail.com">email</a> me. I look forward
            to connecting.
          </p>
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
            <li>Customized Web and Application Development</li>
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
        }
        .socialLinks > span {
          flex-basis: 80%;
        }
        .socialLinks > span > a {
          height: 10px;
          padding: 0;
          font-size: 2rem;
          transition: color 0.15s, background-color 0.5s, border 0.5s;
          transition-timeing-function: ease-in;
          margin: 0;
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
          grid-gap: 2rem;
          margin-bottom: 10%;
          justify-content: space-evenly;
          align-items: center;
        }
        ul > li {
          list-style: none;
          box-shadow: 0.5rem 0.25rem 0.5rem 0.5rem #eaeaea;
          transition: all 0.15s linear;
          padding: 5%;
          color: white;
        }
        ul > li:hover {
          box-shadow: 0.5rem 0.25rem 0.5rem 0.3rem #4d4b4b;
        }

        #myStack {
          text-align: left;
          font-size: 2rem;
        }
        @media (max-width: 800px) {
          article > p {
            // text-align: center;
            line-height: 2;
          }
        }
        @media (max-width: 600px) {
          article > p {
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
}
