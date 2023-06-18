import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REGISTER,
    GET_ALL_NEWS,
    GET_IMPORTANT_NEWS,
    GET_POST_BY_SLUG,
    BUTTON_CLICKED,
} from '../types/types'





//-------------------------------------------Authorization------------------------------------------------//


const authLoginRequestActionCreator = () => ({
    type: AUTH_LOGIN.REQUEST
})

const authLoginSuccessActionCreator = (data) => ({
    type: AUTH_LOGIN.SUCCESS,
    payload: data
})

const authLoginErrorActionCreator = (err) => ({
    type: AUTH_LOGIN.ERROR,
    payload: err
})


//---

const authRegisterRequestActionCreator = () => ({
    type: AUTH_REGISTER.REQUEST
})

const authRegisterSuccessActionCreator = (data) => ({
    type: AUTH_REGISTER.SUCCESS,
    payload: data
})

const authRegisterErrorActionCreator = (err) => ({
    type: AUTH_REGISTER.ERROR,
    payload: err
})

const authLogoutActionCreator = () => ({
    type: AUTH_LOGOUT
})


//---
const buttonClickedActionCreator = () => ({
    type: BUTTON_CLICKED
});


export const GetAllNews = () => ({
    type: GET_ALL_NEWS
})

export const getImportantNews = () => ({
    type: GET_IMPORTANT_NEWS
})

export const getPostBySlug = () => (
    {
        type: GET_POST_BY_SLUG
    }
)

export {
    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authLoginErrorActionCreator,

    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator,
    authRegisterErrorActionCreator,

    authLogoutActionCreator,

    buttonClickedActionCreator
}