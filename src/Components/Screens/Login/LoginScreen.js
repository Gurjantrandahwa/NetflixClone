import React from "react";
import "./loginScreen.css";

export default function LoginScreen(){
    return<div className={"loginScreen"}>
        <div className={"loginScreen-background"}>
            <img className={"loginScreen-logo"}
                 src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"}
                 alt={"netflix-logo"}/>
            <img className={"nav-avatar"} alt={"avatar"}
                 src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}/>
        </div>
        <h3>Login</h3>
    </div>
}