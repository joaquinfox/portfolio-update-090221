import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Image from "next/image";
import React, { useState } from "react";

export default function About() {
  const [hero, setHero] = useState(false);
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>About</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav></Nav>
      <main classnMae={Layout.main}>
        <div className="image-container">
          <Image
            className="about -pic"
            src="/images/me-blackwhite.JPG"
            width="200%"
            height="100%"
            layout=""
            alt="cartoon graphic of Joaquin Fox"
          ></Image>
          <p>
            Hi. I'm Joaquin, a web developer and programmer, living in Arizona.
            I am fascinated by technology, nature and science, and I write about
            all these things on my blog Simple Sapien.
          </p>
        </div>
        <div className="image-container2">
          <p>
            Hi. I'm Joaquin, a web developer and programmer, living in Arizona.
            I am fascinated by technology, nature and science, and I write about
            all these things on my blog Simple Sapien.
          </p>
        </div>
        <article>
          <p>
            I offer custom web and application development through my company,
            joaquinfox.com. Have a project you would like talk about? Email me,
            subject "work", I would love to connect.
          </p>
          <p>
            I organize an Accountability Team of international developers who
            meet regularly for standups, code reviews and to generally
            collaborate, inspire and hold eachother accountable.{" "}
            <span className="about-text-transition">
              {" "}
              Would you like to be part of an accountability team? We are
              looking for team members with a focus on JavaScript. Email me with
              subject "accountability team" if you'd like to know more.
            </span>
          </p>
          <p>
            <span className="about-text-transition">
              Outside of work I am usually coding, exploring a new technology,
              or enjoying the outdoors with my family. I care deeply about the
              climate and general health of our planet. Somethings on my mind at
              the moment are web technologies, agile project management, and
              capitalism.
            </span>
          </p>
        </article>
      </main>
      <Footer></Footer>
      <style jsx>{`
        // .socialLinks {
        //   margin-bottom: 10%;
        //   display: flex;
        // }
        // .socialLinks > span {
        //   flex-basis: 80%;
        // }
        // .socialLinks > span > a {
        //   height: 10px;
        //   padding: 0;
        //   font-size: 2rem;
        //   transition: color 0.15s, background-color 0.5s, border 0.5s;
        //   transition-timeing-function: ease-in;
        //   margin: 0;
        //   position: relative;
        //   top: 8%;
        // }
        // .socialLinks > span > a:hover {
        //   color: white;
        //   background-color: #0070f3;
        //   border: 1px solid black;
        //   border-radius: 0% 10% 0% 40%;
        // }

        article {
          width: 80%;
          margin: auto;
          //   background-color:white;
          color: black;
        }
        article > p {
          text-align: left;
          line-height: 3;
          color: white;
        }
        // .about-text-transition {
        //   color: white;
        // }
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
