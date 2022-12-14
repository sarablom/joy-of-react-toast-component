import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [value, setValue] = useState({ textArea: "", radioButton: "" });
  const [toastIsOpen, setToastIsOpen] = useState(false);
  console.log(value);

  const radioButtons = VARIANT_OPTIONS.map((type) => (
    <label key={type} htmlFor={`variant-${type}`}>
      <input
        id={`variant-${type}`}
        type="radio"
        name="variant"
        value={type}
        checked={value.radioButton === type}
        onChange={(e) => {
          setValue({
            ...value,
            radioButton: e.target.value,
          });
        }}
      />
      {type}
    </label>
  ));

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastIsOpen && <Toast message={value.textArea} variant={value.radioButton} toastIsOpen={setToastIsOpen} />}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={value.textArea}
              onChange={(e) => setValue({ ...value, textArea: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>{radioButtons}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setToastIsOpen(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
