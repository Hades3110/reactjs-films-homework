import { combineReducers } from "redux";
import filmListPageCountReducer from "./filmList/reducer";

const rootReducer = combineReducers({
    pageCounter: filmListPageCountReducer
})

export default rootReducer
