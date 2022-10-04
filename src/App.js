import './App.css';
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginScreen from "./Components/Screens/Login/LoginScreen";

function App() {
    const user = {};
    return <BrowserRouter>
        <div className={"app"}>
            <Routes>
                {!user ? (
                    <Route path={"/homeScreen"} element={<LoginScreen/>}/>

                ) : (
                    <Route path={"/"} element={<HomeScreen/>}/>
                )}

            </Routes>
        </div>
    </BrowserRouter>
}

export default App;
