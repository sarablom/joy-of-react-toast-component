import React, { useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toasts, setToasts] = useState([
    { id: crypto.randomUUID(), message: "Hej", variant: "notice" },
    { id: crypto.randomUUID(), message: "Hej då", variant: "success" },
  ]);
  const [value, setValue] = useState({ message: "", variant: "notice" });

  const handleOnSubmit = (e) => {
    const newToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: value.message,
        variant: value.variant,
      },
    ];
    setToasts(newToasts);
  };

  const radioButtons = VARIANT_OPTIONS.map((type) => (
    <label key={type} htmlFor={`variant-${type}`}>
      <input
        id={`variant-${type}`}
        type="radio"
        name="variant"
        value={type}
        checked={value.variant === type}
        onChange={(e) => {
          setValue({
            ...value,
            variant: e.target.value,
          });
        }}
      />
      {type}
    </label>
  ));

  return (
    <form className={styles.wrapper} onClick={(e) => handleOnSubmit(e)}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} />}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={value.message}
              onChange={(e) => setValue({ ...value, message: e.target.value })}
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
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
