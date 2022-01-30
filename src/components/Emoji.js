import styles from "./Emoji.module.css";
import { useState } from "react";

const objectEmoji = {
  "": "",
  "🎏": "Carp Streamer",
  "🎊": "Confetti Ball",
  "💈": "Barber Pole",
  "🔮": "Crystal Ball",
  "📟": "Pager",
  "🏮": "Lantern",
  "🔭": "Telescope",
  "🔬": "Micrscope",
  "✉️": "Envelope",
  "📰": "Newspaper",
  "📐": "Triangular Ruler",
  "✒️": "Black Nib",
  "📂": "Know Folder"
};

const emojiKeys = Object.keys(objectEmoji);

const Emoji = (props) => {
  const [input, setInput] = useState("");

  const emojiClickHandler = (emoji) => {
    let emojiName = objectEmoji[emoji];
    setInput(emojiName);
  };

  const inputChangeHandler = (event) => {
    const input = event.target.value;
    let emojiName = objectEmoji[input];
    setInput(emojiName);

    if (!(input in objectEmoji)) {
      setInput("Sorry no emoji found :(");
    }
  };

  return (
    <>
      <main className={styles.main}>
        {" "}
        <section>
          <label className={styles.label}>Object Emoji</label>
          <br />
          <input
            onChange={inputChangeHandler}
            placeholder="Emoji"
            className={styles.input}
            type="text"
          />
        </section>
        <h1>{input}</h1>
        <section className={styles.emojiHolder}>
          {emojiKeys.map((emoji) => {
            return (
              <span
              
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
                className={styles.emoji}
              >
                {emoji}
              </span>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Emoji;
