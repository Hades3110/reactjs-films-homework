import { FILM_LIST_SORT } from './action'

const initialState = {
    type: true
}

const filmListSortReducer = (state = initialState, action: { type: string, payload: boolean }) => {
    switch (action.type) {
        case FILM_LIST_SORT:
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}

export default filmListSortReducer