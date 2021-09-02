import Head from "next/head";
import styles from "../styles/components/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fluid Aesthetics</title>
        <meta
          name="description"
          content="fluidaesthetics, injectibles, cosmetics, beauty, botox"
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
              Lorem ipsum dolor sit amet con p
            </p>
          </article>
          <article className={styles.card}>
            <Link href="/for-employers">
              <a>
                <h2 className={styles.title}>For Employers&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>bcaecati doloribus.</p>
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
