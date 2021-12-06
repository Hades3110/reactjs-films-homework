import { combineReducers } from "redux";
import filmListPageCountReducer from "./filmListCountAndCategories/reducer";
import filmListSortReducer from "./filmListSort/reducer";
import mainBannerReducer from "./mainBanner/reducer";

const rootReducer = combineReducers({
    pageCounter: filmListPageCountReducer,
    sortType: filmListSortReducer,
    mainBanner: mainBannerReducer
})

export default rootReducer
