import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/sign-up'} element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;