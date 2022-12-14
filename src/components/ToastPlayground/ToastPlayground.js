import React, { useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [toasts, setToasts] = useState([]);
    const [value, setValue] = useState({ message: "", variant: VARIANT_OPTIONS[0] });

    const handleOnSubmit = e => {
        e.preventDefault();
        const newToasts = [
            ...toasts,
            {
                id: crypto.randomUUID(),
                message: value.message,
                variant: value.variant,
            },
        ];
        setToasts(newToasts);
        setValue({ message: "", variant: VARIANT_OPTIONS[0] });
    };

    const handleOnClose = (id) => {
        const filteredToasts = toasts.filter(toast => toast.id !== id);

        setToasts(filteredToasts);
    }

    const radioButtons = VARIANT_OPTIONS.map(type => (
        <label key={type} htmlFor={`variant-${type}`}>
            <input
                id={`variant-${type}`}
                type="radio"
                name="variant"
                value={type}
                checked={value.variant === type}
                onChange={e => {
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
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf toasts={toasts} onDismiss={handleOnClose} />

            <form className={styles.controlsWrapper} onSubmit={handleOnSubmit}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={value.message}
                            onChange={e =>
                                setValue({ ...value, message: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {radioButtons}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
