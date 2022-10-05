import React, {useEffect, useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [show, handleShow] = useState(false)
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => {
            window.removeEventListener("scroll", transitionNavbar);
        }
    }, [])
    return <div className={`nav ${show && "nav-black"}`}>
        <div className={"nav-contents"}>
            <Link to={"/"}>
                <img className={"nav-logo"}
                     src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}
                     alt={"netflix-logo"}/>
            </Link>

            <Link to={"/profile"}>
                <img className={"nav-avatar"} alt={"avatar"}
                     src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}/>
            </Link>

        </div>

    </div>
}