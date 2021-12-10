import { HEADER_SEARCH } from "./action";

const initialState = {
    display: true,
    search: ''
}

const mainBannerAndSearchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case HEADER_SEARCH:
            return {
                ...state,
                display: action.payload.display,
                search: action.payload.search
            }
        default:
            return state
    }
}

export default mainBannerAndSearchReducer