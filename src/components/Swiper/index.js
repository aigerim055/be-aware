import React from 'react';
import {useSelector} from "react-redux";
import SwiperNews from "./swiperNews";

const SwiperLine = () => {

    const info = useSelector(state => state.important_news)

    return (
        <div>
            <SwiperNews info={info}/>
        </div>
    );
};

export default SwiperLine;