import React from 'react';
import SideBar from "../../components/SideBar";
import Newsline from "../../components/newsline";
import {useDispatch, useSelector} from "react-redux";
import {buttonClicked} from "../../redux/selectors/selectors";
import {buttonClickedActionCreator} from "../../redux/action/actions";
import styles from "../homepage/styles.module.css";
import Header from "../../components/header";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import SignUp from "../SignUp";
import Post from "../../components/post";
import EventCards from "../../components/eventCards";

const EventsPage = () => {
    const dispatch = useDispatch()
    const buttonClick = useSelector(buttonClicked)

    const handleButtonClick = () => {
        dispatch(buttonClickedActionCreator())
        console.log(buttonClick)
    }

    const info = useSelector(state => state.important_news)


    return (
        <div className={buttonClick ? styles.homepageOverlay : styles.homepage}>
            <div className="container">
                <Header />
            </div>
            <div className={buttonClick ? styles.visibleAuth : styles.notVisibleAuth}>
                <div className={styles.closeIconWrap}>
                    <CancelRoundedIcon onClick={handleButtonClick} className={styles.closeIcon} />
                </div>
                <SignUp />
            </div>

            <section className={'main-section'}>
                <div className="container">
                    <div className="main-section">
                        <SideBar />
                        <div className="content">
                            {/*<SwiperNews info={info}/>*/}
                            {/*<Newsline />*/}
                            <div className={''}>
                                <div className={'home-page'}>
                                    <EventCards />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default EventsPage;