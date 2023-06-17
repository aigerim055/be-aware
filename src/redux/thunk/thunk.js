import {
    authLoginErrorActionCreator,
    authLoginRequestActionCreator,
    authLoginSuccessActionCreator,
    authRegisterErrorActionCreator,
    authRegisterRequestActionCreator,
    authRegisterSuccessActionCreator } from "../action/actions"
import {setToken} from "../../services/token";
import http from "../../services/api/index"



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
        const res = await http.post("http://13.115.195.252/account/token/", data)
        dispatch(authLoginSuccessActionCreator())
        setToken(res.data.token)
    } catch (err) {
        dispatch(authLoginErrorActionCreator(err.response.data.non_field_errors))
        throw err
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { authRegisterUser, authLoginUser}
