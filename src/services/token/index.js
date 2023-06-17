const AUTH_TOKEN ='auth_token'
const AUTH_DATA = 'user_data'
const AUTH_TYPE = 'user_type'

const getToken = () =>{
    return localStorage.getItem(AUTH_TOKEN)
}

const setToken = (token) =>{
    if (token) {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

const removeToken = () =>{
    localStorage.removeItem(AUTH_TOKEN)
}

const getUserData = () =>{
    return localStorage.getItem(AUTH_DATA)
}

const setUserData = (userData) =>{
    if (userData) {
        localStorage.setItem(AUTH_DATA, userData)
    }
}
const getUserType = ()=>{
    return localStorage.getItem(AUTH_TYPE)
}
const setUserType = (userType) =>{
    if(userType){
        localStorage.setItem(AUTH_TYPE,userType )
    }
}
const removeType = ()=>{
    localStorage.removeItem(AUTH_TYPE)
}

const removeData = () =>{
    localStorage.removeItem(AUTH_DATA)
}

export {
    getToken,
    setToken,
    removeToken,
    getUserData,
    setUserData,
    removeData,
    getUserType,
    setUserType,
    removeType
}