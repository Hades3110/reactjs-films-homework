export const VIDEO_PLAY = 'VIDEO_PLAY'

export const changeVideoWindow = (watch: boolean, id: number) => {
    return {
        type: VIDEO_PLAY,
        payload: { watch, id }
    }
}