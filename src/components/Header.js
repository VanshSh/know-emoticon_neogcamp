import styles from "./Header.module.css";
import image from "../images/emojibook.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.image} src={image} alt="Emoji" />
        <h1>Know Emoticon</h1>
      </header>
    </>
  );
};

export default Header;
