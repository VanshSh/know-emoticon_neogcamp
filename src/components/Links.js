import styles from "./Links.module.css";
const Links = (props) => {
  return (
    <>
      <main className={styles.links}>
        <a className={styles.code} href="#">
          GitHub Code
        </a>
        <a className={styles.portfolio} href="#">
          Portfolio
        </a>
      </main>
    </>
  );
};

export default Links;
