import { combineReducers } from 'redux'
import filmListPageCountReducer from './filmListCountAndCategories/reducer'
import filmListSortReducer from './filmListSort/reducer'
import movieLoaderReducer from './loading/reducer'
import videoPlayReducer from './filmVideoPlay/reducer'

const rootReducer = combineReducers({
    pageCounter: filmListPageCountReducer,
    sortType: filmListSortReducer,
    movieLoader: movieLoaderReducer,
    videoPlayer: videoPlayReducer
})

export default rootReducer
