import { MOVIE_LOADER } from './action'

const initialState = {
    isLoaded: false
}

const movieLoaderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MOVIE_LOADER:
            return {
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export default movieLoaderReducer
