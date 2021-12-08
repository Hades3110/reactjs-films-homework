import { combineReducers } from "redux";
import filmListPageCountReducer from "./filmListCountAndCategories/reducer";
import filmListSortReducer from "./filmListSort/reducer";
import mainBannerAndSearchReducer from "./mainBannerAndSearch/reducer";

const rootReducer = combineReducers({
    pageCounter: filmListPageCountReducer,
    sortType: filmListSortReducer,
    mainBannerAndSearch: mainBannerAndSearchReducer
})

export default rootReducer
