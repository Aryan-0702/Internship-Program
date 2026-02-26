import { useEffect } from "react";

export default function Toast({ msg, setShow }) {
    useEffect(() => {
        const t = setTimeout(() => setShow(false), 2000);
        return () => clearTimeout(t);
    }, []);

    return <div className="toast">{msg}</div>;
}