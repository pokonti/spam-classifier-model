import { useState } from "react";
import axios from "axios";
import styles from "./SpamCheck.module.css";

export default function SpamCheckForm() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/predict", { text });
    setResult(response.data.label);
  };
  const getResultClass = () => {
    if (result === "spam") return `${styles.result} ${styles.spam}`;
    if (result === "ham") return `${styles.result} ${styles.ham}`;
    return styles.result;
  };

  return (
    <div className={styles.container}>
      <h1>Spam filter</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your email content here..."
        />
        <button type="submit">Check</button>
      </form>
      {result && <p className={getResultClass()}>{result.toUpperCase()}</p>}
    </div>
  );
}
