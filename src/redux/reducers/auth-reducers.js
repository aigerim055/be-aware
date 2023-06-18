import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, BUTTON_CLICKED } from "../types/types"

const initialState = {
    loading: false,
    error: null,
    isAuthenticated: false,
    user: null,
    token: null,
    responseMessage: null,
    buttonClicked: false,
}
const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN.REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case AUTH_LOGIN.SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload,
                error: null,
                isAuthenticated: true
            }
        case AUTH_LOGIN.ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case AUTH_REGISTER.REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case AUTH_REGISTER.SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                responseMessage: action.payload,
                error: null
            }
        case AUTH_REGISTER.ERROR:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                error: action.payload
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                error: null,
                isAuthenticated: false,
                loading: false
            }
        case BUTTON_CLICKED:
            return {
                ...state,
                buttonClicked: true,
            };
        default:
            return state
    }
}
export default authReducers