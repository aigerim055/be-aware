import React from 'react';
import Header from "../../components/header";
import SideBar from "../../components/SideBar";
import Newsline from "../../components/newsline";
import Icon from '../../components/icons/newspaper.png'
import Swiper from "../../components/Swiper";
import SwiperLine from "../../components/Swiper";
import SwiperNews from "../../components/Swiper/swiperNews";
import SignUp from '../SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { buttonClicked } from '../../redux/selectors/selectors';
import styles from './styles.module.css'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { buttonClickedActionCreator } from '../../redux/action/actions';


const HomePage = () => {
    const dispatch = useDispatch()
    const buttonClick = useSelector(buttonClicked)

    const handleButtonClick = () => {
        dispatch(buttonClickedActionCreator())
        console.log(buttonClick)
    }

    const info = useSelector(state => state.important_news)


    return (
        <div className={buttonClick ? styles.homepageOverlay : styles.homepage} >
            <div className='container'>
                <Header />
           
            <div className={buttonClick ? styles.visibleAuth : styles.notVisibleAuth}>
                <div className={styles.closeIconWrap}>
                    <CancelRoundedIcon onClick={handleButtonClick} className={styles.closeIcon} />
                </div>
                <SignUp />
            </div>

            <section 
            className={buttonClick ? styles.main_section_notV : styles.main_section}>
                <div className="container">
                    <div  className={buttonClick ? styles.main_section_notV: styles.main_section}>
                        <SideBar />
                        <div className="content">
                            {/*<SwiperNews info={info}/>*/}
                            <Newsline />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>

    );
};

export default HomePage;

