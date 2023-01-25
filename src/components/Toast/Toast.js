import React, { useEffect, useCallback, useContext } from "react";
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from "react-feather";
import { ToastContext } from "../ToastProvider/ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ message, variant, id, onDismiss }) {
    const Icon = ICONS_BY_VARIANT[variant];
    const { dismissAllToasts } = useContext(ToastContext);

    const escFunction = useCallback(
        event => {
            if (event.key === "Escape") {
                dismissAllToasts();
            }
        },
        [dismissAllToasts]
    );

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24} />
            </div>
            <p className={styles.content}>
                <VisuallyHidden>{variant}</VisuallyHidden>
                {message}
            </p>
            <button
                className={styles.closeButton}
                onClick={() => onDismiss(id)}
                aria-label="Dismiss message"
                aria-live="off"
            >
                <X size={24} />
            </button>
        </div>
    );
}

export default Toast;
