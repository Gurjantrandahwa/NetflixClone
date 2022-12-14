import React, {useRef} from "react";
import "./SingUpScreen.css";
import {auth} from "../../../Common/firebase";

export default function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert((error).message)
        })
    }
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        })
    }

    return <div className={"signUpScreen"}>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef}
                   type={"email"}
                   placeholder={"Email"}/>
            <input ref={passwordRef}
                   type={"password"}
                   placeholder={"Password"}/>
            <button type={"submit"} onClick={signIn}>Sign In</button>
            <h4>
                <span className={"gray"}>New To Netflix?</span>&nbsp;
                <span className={"signUp-link"} onClick={register}> Sign up now</span></h4>
        </form>
    </div>
}