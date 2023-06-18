import React from 'react';
import Post from "../post";
import {useSelector} from "react-redux";
import Icon from "../icons/newspaper.png";
import styles from './styles.module.css'
import { buttonClicked } from '../../redux/selectors/selectors';

const Newsline = () => {
    const buttonClick = useSelector(buttonClicked)
    const news = useSelector(state => state.news.news).data
    // console.log(news)


    return (
 
    <section className={buttonClick? styles.postSection_notV : styles.postSection}>

            <div className={''}>
                <div className={'home-page'}>
                    {/*<div className="lenta-header">*/}
                    {/*    <div>*/}
                    {/*        <img src={Icon} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <h3>Лента</h3>*/}
                    {/*        <p>Здесь будут публиковаться новости</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {
                        news?.map((post, idx) => (
                            <Post post={post} idx={idx}/>
                        ))
                    }
                </div>
            </div>

        </section>
    );
};



export default Newsline;
