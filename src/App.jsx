import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage";
import SignUp from "./pages/SignUp";
import SignInPage from './pages/SignIn';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/sign-up'} element={<SignUp/>}/>
                    <Route path={'/sign-in'} element={<SignInPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;