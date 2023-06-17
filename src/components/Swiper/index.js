import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SwiperNews from "./swiperNews";
import {getInfo} from "../../store/swiperAction/actionSwiper";

const SwiperLine = () => {
    const dispatch = useDispatch()
    const info = useSelector(state => state.info)
    useEffect(() => {
        dispatch(getInfo())
    },[dispatch])
    console.log(info, 'info')
    return (
        <div>
            <SwiperNews info={info}/>
        </div>
    );
};

export default SwiperLine;