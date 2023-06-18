import {GET_ALL_NEWS, GET_IMPORTANT_NEWS, GET_POST_BY_SLUG} from "../types/types";

const initialState = {
    news: [],
    important_news: [],
    post_by_slug: []
}
export const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_NEWS:
            return {...state, news: action.payload}
        case GET_IMPORTANT_NEWS:
            return {...state, important_news: action.payload}
        case GET_POST_BY_SLUG:
            return {...state, post_by_slug: action.payload}
        default:
            return state
    }
}