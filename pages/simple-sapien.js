import Head from "next/head";
import styles from "../styles/components/blog.module.css";
import cardStyles from "../styles/components/Home.module.css";
// import Nav from "../components/nav";
import Image from "next/image";
import Link from "next/link";

export default function SimpleSapien() {
  return (
    <div className={cardStyles.container}>
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
      <main className={cardStyles.main}>
        <div className={cardStyles.grid}>
          <p className="intro">
            Hi, I&apos;m <strong>Joaquin</strong> and this is my blog, where I
            explore topics that interest me. Have a comment? You can{" "}
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
          <article className={cardStyles.card}>
            <a>
              <Link href="/blogs/accountability" passHref>
                <h2 className={cardStyles.title}>Accountability Teams</h2>
              </Link>
            </a>{" "}
            <p className={cardStyles.description}>
              What if there were a way to improve your weekly progress towards
              any goal ... 
            </p>
            <p className={styles.datePublished}>September 16, 2021</p>
          </article>
          <article className={cardStyles.card}>
            <a>
              <Link href="/blogs/accountability-team" passHref>
                <h2 className={cardStyles.title}>Second Blog</h2>
              </Link>
            </a>{" "}
            <p className={cardStyles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ip
            </p>
            <p className={styles.datePublished}>September 16, 2021</p>
          </article>
        </div>

        <button>
          <Link href="/">&larr;Back</Link>
        </button>
      </main>
      <footer className={cardStyles.footer}>
        <p>
          Built by
          <a
            href="https://joaquinfox.github.io/profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Joaquin
          </a>
        </p>
      </footer>
      <style jsx>{`
        .intro {
          line-height: 2;
          font-size: 1.25rem;
          padding: 0 5%;
        }
      `}</style>
    </div>
  );
}
