import React from 'react';
import Header from "../../components/header";
import SideBar from "../../components/SideBar";
import Newsline from "../../components/newsline";
import Icon from '../../components/icons/newspaper.png'
import Swiper from "../../components/Swiper";
import SwiperLine from "../../components/Swiper";
import SwiperNews from "../../components/Swiper/swiperNews";
import {useSelector} from "react-redux";


const HomePage = () => {

    const info = useSelector(state => state.important_news)



    return (
        <div>
            <div className="container">
                <Header/>
            </div>
            <section className={'main-section'}>
                <div className="container">
                    <div className="main-section">
                        <SideBar/>
                        <div className="content">
                            {/*<SwiperNews info={info}/>*/}
                            <Newsline/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default HomePage;

