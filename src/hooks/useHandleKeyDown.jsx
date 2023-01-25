import { useEffect, useCallback } from "react";

export const useHandleKeyDown = (key, callback) => {
    const handleOnKeyPress = useCallback(
        event => {
            if (event.key === key) {
                callback();
            }
        },
        [callback, key]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleOnKeyPress);

        return () => {
            window.removeEventListener("keydown", handleOnKeyPress);
        };
    }, [handleOnKeyPress]);
};
