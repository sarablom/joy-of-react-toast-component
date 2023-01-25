import React, { createContext, useState, useCallback } from "react";
import { useKeyDown } from "../../hooks/useEscapeKey";

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

    const handleEscape = useCallback(() => {
        setToasts([]);
    }, []);

    useKeyDown("Escape", handleEscape);

    return (
        <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
