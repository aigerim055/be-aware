import React from 'react';
import Header from "../../components/header";
import SignUp from '../SignUp';
import { useSelector } from 'react-redux';
import { buttonClicked } from '../../redux/selectors/selectors';
import styles from './styles.module.css'


const HomePage = () => {
    const buttonClick = useSelector(buttonClicked)
    return (
        <div className={buttonClick ? styles.homepageOverlay : styles.homepage}>
            <Header />

            <div className={buttonClick ? styles.visibleAuth : styles.notVisibleAuth}><SignUp /></div>
        </div>

    );
};

export default HomePage;

