import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const createToast = value => {
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

    const dismissToast = id => {
        const filteredToasts = toasts.filter(toast => toast.id !== id);
        setToasts(filteredToasts);
    };

    const dismissAllToasts = () => {
        setToasts([]);
    };

    return (
        <ToastContext.Provider
            value={{ toasts, createToast, dismissToast, dismissAllToasts }}
        >
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
