import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper}>
          <Toast key={toast.id} message={toast.message} variant={toast.variant} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
