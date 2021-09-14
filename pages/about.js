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
      <main className={Layout.main}>
        <div className="image-container">
          <Image
            className="about -pic"
            src="/images/me-blackwhite.JPG"
            width="200%"
            height="100%"
            alt="cartoon graphic of Joaquin Fox"
          ></Image>
          <p>
            Hi. I'm Joaquin, a web developer and programmer, living in Arizona.
            I am fascinated by technology, nature and science, and I write about
            all these things on my blog Simple Sapien.
          </p>
        </div>
        <div className="image-container2">
          <div id="background-img">
            Hi. I'm Joaquin, a web developer and programmer, living in Arizona.
            I am fascinated by technology, nature and science, and I write about
            all these things on my blog Simple Sapien.
          </div>
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
        article {
          width: 80%;
          margin: 0 auto 5%;
          color: black;
        }
        article > p {
          text-align: left;
          line-height: 3;
          color: white;
        }

        #myStack {
          text-align: left;
          font-size: 2rem;
        }
        @media (max-width: 800px) {
          article > p {
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
