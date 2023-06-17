import React, {useState} from 'react';
import HomeIcon from "../Icons/homeIcon";
import EventIcon from "../Icons/eventIcon";
import SavesIcon from "../Icons/savesIcon";
import ComplaintsIcon from "../Icons/complaintsIcon";
import './sideBarStyle.css'
import {NavLink} from "react-router-dom";
import ClockIcon from "../Icons/clockIcon";
import Footer from "../Footer";
const SideBar = ({children}) => {

    return (
        <div>
            <div className={'sidebar'}>
                <NavLink to={'/'} className={`btn-icons`} activeclassName={'active svg'}><HomeIcon/><h2>Лента</h2></NavLink>
                <NavLink to={'/meropriyatiya'} className={`btn-icons`} activeclassName={'active svg'}><EventIcon/><h2>Мероприятия</h2></NavLink>
                <NavLink to={'/raspisaniye'} className={`btn-icons`} activeclassName={'active svg'}><ClockIcon/><h2>Расписание</h2></NavLink>
                <NavLink to={'/jaloby'} className={`btn-icons`} activeclassName={'active'}><ComplaintsIcon/><h2>Жалобы</h2></NavLink>
                <NavLink to={'/saves'} className={`btn-icons`} activeclassName={'active'}><SavesIcon/><h2>Сохраненные</h2></NavLink>
            </div>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default SideBar;