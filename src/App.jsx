import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage";
import SignUp from "./pages/SignUp";
import SignInPage from './pages/SignIn';
import {useDispatch} from "react-redux";
import {getImportantNews, getNews} from "./redux/thunk/thunk";
import PostPage from "./pages/postPage";
import EventsPage from "./pages/eventsPage";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNews())
    }, [])

    useEffect(() => {
        dispatch(getImportantNews())
    }, [])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/events'} element={<EventsPage/>}/>
                    <Route path={'/reports'} element={<EventsPage/>}/>
                    <Route path={'/shedule'} element={<EventsPage/>}/>
                    <Route path={'/favorites'} element={<EventsPage/>}/>
                    <Route path={'/sign-up'} element={<SignUp/>}/>
                    <Route path={'/sign-in'} element={<SignInPage/>}/>
                    <Route path={'/post/:slug'} element={<PostPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;