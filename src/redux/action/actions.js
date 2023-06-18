import {
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REGISTER,
    BUTTON_CLICKED
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