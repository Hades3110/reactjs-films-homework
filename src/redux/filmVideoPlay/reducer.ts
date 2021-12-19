import { VIDEO_PLAY } from './action'

const initialState = {
    watch: false,
    key: ''
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