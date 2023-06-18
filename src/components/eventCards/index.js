import React from 'react';
import './style.css';
// import ShareIcon from "../Icons/shareIcon";
// import SavesIcon from "../Icons/savesIcon";
import {NavLink} from "react-router-dom";



const EventCards = () => {

    return (
        <div>
            {
                categoryNews.map(el =>
                    <div key={el.id} className={'event-cards'}>
                        <div className={'publish-date'}>
                            <h2>{el.publish}</h2>
                            <p>{el.sum}</p>
                        </div>
                        <div className={'eventCards-time-table'}>
                            <div className={'date'}>
                                <h2>{el.date}</h2>
                                <p>{el.month}</p>
                            </div>
                            <div className={'place'}>
                                <p>{el.time}</p>
                                <p>{el.place}</p>
                            </div>
                            <div className={'title'}>
                                <div>
                                    <h1>{el.text}</h1>
                                </div>
                                <div><img src={el.image} alt=""/></div>
                            </div>
                        </div>
                        <div className={'learn-more'}>
                            {/*<ShareIcon/>*/}
                            {/*<SavesIcon/>*/}
                            <NavLink to={'/eventsPage'}>Подробнее</NavLink>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default EventCards;

const categoryNews = [
    {
        id: 1,
        category: 0,
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        sum: '14.06.23',
        publish: 'Мэрия города Бишкек'
    },
    {
        id: 2,
        category: 1,
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'Отключение света',
        place: 'Арча-Бешик',
        sum: '14.06.23',
        publish: 'Мэрия города Бишкек'
    },
    {
        id: 3,
        category: 0,
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        sum: '14.06.23',
        publish: 'Мэрия города Бишкек'
    },
    {
        id: 4,
        category: 2,
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        sum: '14.06.23',
        publish: 'Мэрия города Бишкек'
    },
    {
        id: 5,
        category: 1,
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        sum: '14.06.23',
        publish: 'Мэрия города Бишкек'
    },
    {
        id: 6,
        category: 0,
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        sum: '14.06.23',
        publish: 'Мэрия города Бишкек'
    }
]