import { VIDEO_PLAY } from './action'

const initialState = {
    watch: false,
    id: 0
}

const videoPlayReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case VIDEO_PLAY:
            return {
                ...state,
                watch: action.payload.watch,
                id: action.payload.id
            }
        default:
            return state
    }
}

export default videoPlayReducer