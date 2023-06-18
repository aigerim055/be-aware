import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostBySlug} from "../../redux/thunk/thunk";

const PostPage = () => {

    const params = useParams().slug
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostBySlug(params))
    },[])

    const post = useSelector(state => state.news.post_by_slug)


    return (
        <div>
            hello
        </div>
    );
};

export default PostPage;