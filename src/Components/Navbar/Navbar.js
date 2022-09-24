import React, {useEffect, useState} from "react";
import "./Navbar.css";

export default function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll", () => {
            });
        }
    }, [])
    return <div className={`nav ${show && "nav-black"}`}>
        <img className={"nav-logo"}
             src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}
             alt={"netflix-logo"}/>
        <img className={"nav-avatar"} alt={"avatar"}
             src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}/>
    </div>
}