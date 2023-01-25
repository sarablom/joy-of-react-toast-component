import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    return (
        <ToastContext.Provider value={{ toasts, setToasts }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
