import { VIDEO_PLAY, changeVideoWindow } from '../action';

describe('changeVideoWindow test', () => {
    test('test', () => {
        expect(changeVideoWindow(true, 1)).toEqual({ type: VIDEO_PLAY, payload: { watch: true, id: 1 } })
    })
    test('test', () => {
        expect(changeVideoWindow(false, 2)).toEqual({ type: VIDEO_PLAY, payload: { watch: false, id: 2 } })
    })
})