import styles from "./Links.module.css";
const Links = (props) => {
  return (
    <>
      <main className={styles.links}>
        <a
          className={styles.code}
          href='https://github.com/VanshSh/know-emoticon_neogcamp'
        >
          GitHub Code
        </a>
        <a
          className={styles.portfolio}
          href='https://vanshsharma.netlify.app/index.html'
        >
          Portfolio
        </a>
      </main>
    </>
  )
};

export default Links;
