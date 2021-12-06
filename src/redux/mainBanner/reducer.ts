import { MAIN_BANNER_DISPLAY } from "./action";

const initialState = {
    display: true
}

const mainBannerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case MAIN_BANNER_DISPLAY:
            return {
                ...state,
                display: action.payload
            }
        default:
            return state
    }
}

export default mainBannerReducer