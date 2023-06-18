import React from 'react';
import HomeIcon from "../icons/homeIcon";
import EventIcon from "../icons/eventIcon";
import SavesIcon from "../icons/savesIcon";
import ComplaintsIcon from "../icons/complaintsIcon";
import './sideBarStyle.css'
import {NavLink} from "react-router-dom";
import ClockIcon from "../icons/clockIcon";
const SideBar = ({children}) => {

    return (
        <div>
            <div className={'sidebar'}>
                <NavLink to={'/'} className={`btn-icons`} activeclassName={'active svg'}><HomeIcon/><h2>Лента</h2></NavLink>
                <NavLink to={'/events'} className={`btn-icons`} activeclassName={'active svg'}><EventIcon/><h2>Мероприятия</h2></NavLink>
                <NavLink to={'/shedule'} className={`btn-icons`} activeclassName={'active svg'}><ClockIcon/><h2>Расписание</h2></NavLink>
                <NavLink to={'/reports'} className={`btn-icons`} activeclassName={'active'}><ComplaintsIcon/><h2>Жалобы</h2></NavLink>
                <NavLink to={'/favorites'} className={`btn-icons`} activeclassName={'active'}><SavesIcon/><h2>Сохраненные</h2></NavLink>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default SideBar;