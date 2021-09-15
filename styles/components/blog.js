import styles from "./blog.module.css";
export default function Blog({ children }) {
  return <div className={styles.blog}>{children}</div>;
}
