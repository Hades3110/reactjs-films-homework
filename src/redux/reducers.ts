import { combineReducers } from 'redux'
import filmListPageCountReducer from './filmListCountAndCategories/reducer'
import filmListSortReducer from './filmListSort/reducer'
import videoPlayReducer from './filmVideoPlay/reducer'

const rootReducer = combineReducers({
    pageCounter: filmListPageCountReducer,
    sortType: filmListSortReducer,
    videoPlayer: videoPlayReducer
})

export default rootReducer
