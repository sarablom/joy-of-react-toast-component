import React from "react";
import ToastProvider from "../../context/ToastProvider/ToastProvider";

import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

function App() {
    return (
        <>
            <ToastProvider>
                <ToastPlayground />
            </ToastProvider>
            <Footer />
        </>
    );
}

export default App;
