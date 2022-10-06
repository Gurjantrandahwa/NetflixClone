import './App.css';
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginScreen from "./Components/Screens/Login/LoginScreen";
import {useEffect} from "react";
import {auth} from "./Common/firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./Reducer/userSlice";
import Profile from "./Components/Screens/Profile/Profile";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))

            } else {
                dispatch(logout())
            }
        })
        return unsubscribe;
    }, [dispatch])
    return <BrowserRouter>
        <div className={"app"}>
            {!user ? (
                <LoginScreen/>
            ) : (
                <Routes>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route exact path={"/"} element={<HomeScreen/>}/>
                </Routes>
            )}

        </div>
    </BrowserRouter>
}

export default App;
