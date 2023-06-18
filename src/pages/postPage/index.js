import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostBySlug} from "../../redux/thunk/thunk";
import {buttonClicked} from "../../redux/selectors/selectors";
import {buttonClickedActionCreator} from "../../redux/action/actions";
import styles from "../homepage/styles.module.css";
import Header from "../../components/header";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import SignUp from "../SignUp";
import SideBar from "../../components/SideBar";

const PostPage = () => {

    const params = useParams().slug
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostBySlug(params))
    },[])

    const post = useSelector(state => state.news.post_by_slug)

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

                <section className={buttonClick ? styles.main_section_notV : styles.main_section}>
                    <div className="container">
                        <div  className={buttonClick ? styles.main_section_notV: styles.main_section}>
                            <SideBar />
                            <div className="content">
                                <div className="card-retrieve">
                                    <h1>{post.title}</h1>
                                    {/*<p>{post.user}</p>*/}
                                    <img src={post.image} alt=""/>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default PostPage;