import React from 'react';
// import './post_style.css'
import Views from "../icons/Views";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { buttonClicked } from '../../redux/selectors/selectors';
import { buttonClickedActionCreator } from '../../redux/action/actions';
import styles from './styles.module.css'

const Post = ({ post, idx }) => {
    const buttonClick = useSelector(buttonClicked)


    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/post/${post.slug}`)
    }


    return (
        <div onClick={handleClick} className={buttonClick ? styles.post_card_NotVisible : styles.post_card} key={idx + 1}>
            <div className={styles.post_card_header}>
                <p className={styles.post_user}>{post.user}</p>
                <span className={styles.post_card_date}>{post.date}</span>
                <div className={styles.post_card_views}>
                    <Views />
                    <span>{post.views_count}</span>
                </div>
            </div>
            <div className={styles.card_main}>
                <div className={styles.card_desc}>
                    <h6>{post.title}</h6>
                    <p>{post.content}</p>
                </div>
                <div className={styles.card_img}>
                    <img src={post.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Post;