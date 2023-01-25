import React, { createContext, useState, useCallback } from "react";
import { useHandleKeyDown } from "../../hooks/useHandleKeyDown";

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

    useHandleKeyDown("Escape", handleEscape);

    return (
        <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
