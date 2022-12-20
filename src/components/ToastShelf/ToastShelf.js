import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, onDismiss }) {
    return (
        <ol className={styles.wrapper}>
            {toasts.map(toast => (
                <li className={styles.toastWrapper}>
                    <Toast
                        key={toast.id}
                        id={toast.id}
                        message={toast.message}
                        variant={toast.variant}
                        onDismiss={onDismiss}
                    />
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
