import Head from "next/head";
import styles from "../styles/components/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joaquin Fox Portfolio Site</title>
        <meta
          name="description"
          content="Joaquin Fox portfolio site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Joaquin <a>Fox</a>
        </h1>
        <h4>Web Development & Software Engineering</h4>

        <div className={styles.grid}>
          <article className={styles.card}>
            <Link href="/portfolio">
              <a>
                <h2 className={styles.title}>Portfolio&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>
              A gallery of my work.
            </p>
          </article>
          <article className={styles.card}>
            <Link href="/for-employers">
              <a>
                <h2 className={styles.title}>For Employers&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>Hiring? I just might be interested.</p>
          </article>
          <article className={styles.card}>
            <Link href="#">
              <a>
                <h2 className={styles.title}>Custom Web Services&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>Need a website or application? I offer custom web services for your business or project.</p>
          </article>
          <article className={styles.card}>
            <Link href="/about">
              <a>
                <h2 className={styles.title}>About&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>Hi. I'm Joaquin, a web developer and programmer, living in Arizona...</p>
          </article>
          <article className={styles.card}>
            <Link href="#">
              <a>
                <h2 className={styles.title}>Simple Sapien&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>Thoughts, reflections and lessons learned from a simple sapien.</p>
          </article>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Built by
          <a
            href="https://joaquinfox.github.io/profile//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joaquin
          </a>
        </p>
      </footer>
    </div>
  );
}
