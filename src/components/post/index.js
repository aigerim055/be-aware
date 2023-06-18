import React from 'react';
import './post_style.css'
import Views from "../icons/Views";
import {useNavigate} from "react-router-dom";

const Post = ({post, idx}) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/post/${post.slug}`)
    }


    return (
        <div onClick={handleClick} className={'post-card'} key={idx+1}>
            <div className="post-card-header">
                <p className={'post-user'}>{post.user}</p>
                <span className={'post-card-date'}>{post.date}</span>
                <div className="post-card-views">
                    <Views/>
                    <span>{post.views_count}</span>
                </div>
            </div>
            <div className="card-main">
                <div className="card-desc">
                    <h6>{post.title}</h6>
                    <p>{post.content}</p>
                </div>
                <div className="card-img">
                    <img src={post.image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Post;