import React from 'react';
import Header from "../../components/header";
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
    return (
        <div className={buttonClick ? styles.homepageOverlay : styles.homepage}>
            <Header />

            <div className={buttonClick ? styles.visibleAuth : styles.notVisibleAuth}>
                <div className={styles.closeIconWrap}>
                    <CancelRoundedIcon onClick={handleButtonClick} className={styles.closeIcon} />
                </div>
                <SignUp />
            </div>
        </div>

    );
};

export default HomePage;

