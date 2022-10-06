import React from "react";
import "./Profile.css";
import Navbar from "../../Navbar/Navbar";
import {useSelector} from "react-redux";
import {selectUser} from "../../../Reducer/userSlice";
import {auth} from "../../../Common/firebase";

export default function Profile() {
    const user = useSelector(selectUser)
    return <div className={"profile"}>
        <Navbar/>
        <div className={"profile-body"}>
            <h1>Edit Profile</h1>
            <div className={"profile-info"}>
                <img alt={"avatar"}
                     src={"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}/>
                <div className={"profile-details"}>
                    <h2>{user.email}</h2>
                    <div className={"profile-plans"}>
                        <button onClick={() => auth.signOut()}
                                className={"profile-signOut-btn"}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}