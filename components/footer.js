import Layout from "../styles/components/layout";

export default function footer() {
  return (
    <footer className={Layout.footer}>
      <div>
        Built by
        <a
          href="https://joaquinfox.github.io/profile//"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Joaquin
        </a>
      </div>
    </footer>
  );
}
