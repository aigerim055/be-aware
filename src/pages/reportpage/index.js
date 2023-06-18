import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buttonClicked} from "../../redux/selectors/selectors";
import {buttonClickedActionCreator} from "../../redux/action/actions";
import styles from "../homepage/styles.module.css";
import Header from "../../components/header";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import SignUp from "../SignUp";
import SideBar from "../../components/SideBar";
import Newsline from "../../components/newsline";

const ReportPage = () => {
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
                            <Newsline />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ReportPage;