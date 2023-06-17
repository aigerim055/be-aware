import React from 'react';
import './cards.css';
import image1 from '../assets/image123.png'


const Cards = () => {
    return (
        <div>
            {
                categoryNews.map(el =>
                <div key={el.id} className={'cards-time-table'}>
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
                )
            }
        </div>
    );
};

export default Cards;

const categoryNews = [
    {
        id: 1,
        category: 'Мусор',
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        image: image1
    },
    {
        id: 2,
        category: 'Свет',
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'Отключение света',
        place: 'Арча-Бешик',
        image: image1
    },
    {
        id: 3,
        category: 'Мусор',
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        image: image1
    },
    {
        id: 4,
        category: 'Вода',
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        image: image1
    },
    {
        id: 5,
        category: 'Свет',
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        image: image1
    },
    {
        id: 6,
        category: 'Мусор',
        date: 14,
        month: 'июнь',
        time: '07:00 - 09:00',
        text: 'вывоз мусора',
        place: 'Арча-Бешик',
        image: image1
    }
]