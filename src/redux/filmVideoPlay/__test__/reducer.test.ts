import videoPlayReducer, { initialState } from '../reducer';
import { VIDEO_PLAY } from '../action';

describe('videoPlayReducer test', () => {
    test('correct value', () => {
        expect(videoPlayReducer(initialState, { type: VIDEO_PLAY, payload: { watch: true, id: 1 } })).toEqual({ watch: true, id: 1 })
    })
    test('correct value', () => {
        expect(videoPlayReducer(initialState, { type: VIDEO_PLAY, payload: { watch: false, id: 1 } })).toEqual({ watch: false, id: 1 })
    })
})