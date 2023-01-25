import React, { useContext } from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ onDismiss }) {
    const { toasts } = useContext(ToastContext);
    return (
        <ol
            className={styles.wrapper}
            role="region"
            aria-live="assertive"
            aria-label="Notification"
        >
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
