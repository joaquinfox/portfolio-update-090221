import Head from "next/head";
import styles from "../styles/components/blog.module.css";
// import Nav from "../components/nav";
import Image from "next/image";
import Link from "next/link";

export default function SimpleSapien() {
  return (
    <div className={styles.blog}>
      <Head>
        <title>Simple Sapien</title>
      </Head>
      {/* <Nav></Nav> */}
      <div className={styles.titlebanner}>
        <h2>Simple</h2>
        <Image
          className={styles.simpleSapien}
          src="/images/simple-sapien.png"
          width="150"
          height="100"
          alt="cartoon graphic of Joaquin Fox"
        ></Image>
        <h2 className={styles.fontColor}>Sapien</h2>
      </div>
      <main>
        <p>
          Hi, I'm <strong>Joaquin</strong>. In this blog, I explore topics that
          interest me. Have a comment? You can{" "}
          <a href="https://twitter.com/joaquinfox_dev">tweet</a> or{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:joaquin.fox@gmail.com"
          >
            email
          </a>{" "}
          me. Thanks for reading!
        </p>
        <h2>Blog</h2>
        <article>
          <Link href="/about">
            <h2>
              <a href="">First Blog</a>{" "}
            </h2>
          </Link>
          <p>September 12, 2021</p>
        </article>
        <article>
          <Link href="/about">
            <h2>
              <a href="">Second Blog</a>{" "}
            </h2>
          </Link>
          <p>September 20, 2021</p>
        </article>

        <button className={styles.backbutton}>
          <Link className={styles.backbutton} href="/">
            &larr;Back
          </Link>
        </button>
      </main>
      <footer>
        <p>
          Built by
          <a
            href="https://joaquinfox.github.io/profile//"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Joaquin
          </a>
        </p>
      </footer>
      <style jsx>{``}</style>
    </div>
  );
}
