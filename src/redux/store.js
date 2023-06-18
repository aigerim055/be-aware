import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/auth-reducers";
import {newsReducer} from "./reducers/news-reducer";


const rootReducer = combineReducers({
    auth: authReducers,
    news: newsReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))