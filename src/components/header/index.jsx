import React from 'react';
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './index.css'
import Ring from "../icons/ring";
import Admin from "../icons/admin";
import Search from "../icons/search";
import Innpublish from "../icons/innpublish";
import { useDispatch, useSelector } from 'react-redux';
import { buttonClickedActionCreator } from '../../redux/action/actions';
import { buttonClicked } from '../../redux/selectors/selectors';

const Header = () => {
    const dispatch = useDispatch()
    const buttonClick = useSelector(buttonClicked)
    const handleButtonClick = () => {
        dispatch(buttonClickedActionCreator())
    }

    return (
        <div className={'header-info'}>
            <div className={'header-logo'}>
                <h1>be:aware</h1>
            </div>
            <div className={'header-search'}>
                <div className={'searchLogo'}>
                    <button><Search /></button>
                </div>
                <input type="search" placeholder={'Поиск'} />
            </div>
            <div className={'header-publish'}>
                <div className={'innpublish'}><Innpublish />
                </div>
                <button>Опубликовать</button>
            </div>
            <div className={'changer-header'}>
                <button>KG</button>
                <button><Ring /></button>
                <button onClick={handleButtonClick} >< Admin /></button>
            </div>
        </div>
    );
};

export default Header;