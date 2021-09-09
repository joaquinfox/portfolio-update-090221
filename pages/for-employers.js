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
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/joaquinfox"
              >
                GitHub
              </a>{" "}
            </span>
            <span>
              {" "}
              <a href="https://www.linkedin.com/in/joaquin-fox-203182178/">
                li
              </a>{" "}
            </span>
            <span>
              {" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="mailto:joaquin.fox@gmail.com"
              >
                Email
              </a>{" "}
            </span>
            <span>
              {" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="./joaquinfox_cv.pdf"
              >
                CV
              </a>{" "}
            </span>
            {/* <span>
              {" "}
              <a href="">joaquinfox.com</a>{" "}
            </span> */}
          </div>
          <p>
            I am a full stack web developer with six years of programming
            experience. I run an accountability team of international
            programmers who meet regularly for standups and code reviews and to
            collaborate on open source and proprietary projects.
          </p>
          <p>
            I am interested in all things compute, from web development to AI. I
            have specific expertise building in a JavaScript universe.
          </p>
          <p>
            My degrees are in economics and finance and my professional
            background is in corporate accounting and education. You can see my{" "}
            <abbr title="curriculum vitae">CV</abbr>{" "}
            <a
              href="./joaquinfox_cv.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>
            .
          </p>
          <p>
            I offer freelance, custom web developement and app development
            through my company{" "}
            <a href="" target="_blank" rel="noreferrer noopener">
              joaquinfox.com
            </a>{" "}
            . I am open to considering your project, team or company. You can
            email me
            <a href="mailto:joaquin.fox@gmail.com"> here. </a>I look forward to
            connecting.
          </p>
          <h4 id="myStack">My Stack</h4>
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
        .profile-pic-container {
          margin: auto;
        }
        .socialLinks{
          margin-bottom:20%;
        }
      .socialLinks>span{
        padding:3%
      }
      article{
        width:80%;
        margin:auto;
      }
      article > p{
        text-align:left;
        line-height:3;
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(7, 10%);
        grid-gap: 2rem;
        margin-bottom:10%;
        justify-content:space-evenly;
        align-items:center;
      }
      
      ul > li {
        list-style: none;
        box-shadow: 0.5rem 0.25rem 0.5rem 0.5rem #eaeaea;
        transition: all 0.15s linear;
        padding:5%;
        
        // font-size:2rem;
      }
      ul>li:hover{
        box-shadow: 0.5rem 0.25rem 0.5rem 0.3rem #4D4B4B;

      }
      #myStack{
        text-align:left;
        font-size:2rem;
      }
      
      

      // @media screen and (max-width: 800px) {
      //   .container>article > p {
      //     color: red;
      //   }
      // }

 

        }
      `}</style>
    </Layout>
  );
}
