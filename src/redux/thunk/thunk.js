import {
    authLoginErrorActionCreator,
    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authRegisterErrorActionCreator,
    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator } from "../action/actions"
import {setToken} from "../../services/token";
import http from "../../services/api/index"
import axios from "axios";
import {GET_ALL_NEWS, GET_IMPORTANT_NEWS, GET_POST_BY_SLUG} from "../types/types";



const authRegisterUser = (data) => async (dispatch) => {
    dispatch(authRegisterRequestActionCreator())
    try {
        const res = await http.post("http://34.218.247.20/account/register/", data)
        dispatch(authRegisterSuccessActionCreator(res.data))
    } catch (err) {
        dispatch(authRegisterErrorActionCreator(err.response.data.username))
        throw err
    }
}

//----

const authLoginUser = (data) => async (dispatch) => {
    dispatch(authLoginRequestActionCreator())
    try {
        const res = await http.post("http://34.218.247.20/account/login/", data)
        dispatch(authLoginSuccessActionCreator())
        setToken(res.data.access)
    } catch (err) {
        dispatch(authLoginErrorActionCreator(err.response.data.non_field_errors))
        throw err
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { authRegisterUser, authLoginUser}





// ______________________ news ___________________

export const getNews = () => {
    return (dispatch) => {
        axios.get('http://34.218.247.20/feed/news')
            .then(data =>{
                dispatch({type: GET_ALL_NEWS, payload: data})
            })
    }

}


export const getImportantNews = () => {
    return (dispatch) => {
        axios.get('http://34.218.247.20/feed/important/important/')
            .then(data =>{
                dispatch({type: GET_IMPORTANT_NEWS, payload: data.data})
            })
    }

}


export const getPostBySlug = (slug) => {
    return (dispatch) => {
        axios.get(`http://34.218.247.20/feed/news/${slug}`)
            .then(data =>{
                dispatch({type: GET_POST_BY_SLUG, payload: data.data})
            })
    }
}