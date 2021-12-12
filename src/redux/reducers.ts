import { combineReducers } from 'redux'
import filmListPageCountReducer from './filmListCountAndCategories/reducer'
import filmListSortReducer from './filmListSort/reducer'
import movieLoaderReducer from './loading/reducer'

const rootReducer = combineReducers({
    pageCounter: filmListPageCountReducer,
    sortType: filmListSortReducer,
    movieLoader: movieLoaderReducer
})

export default rootReducer
