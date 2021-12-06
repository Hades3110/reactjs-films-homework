export const MAIN_BANNER_DISPLAY = 'MAIN_BANNER_DISPLAY'

export const changeBannerDisplay = (display: boolean) => {
    return {
        type: MAIN_BANNER_DISPLAY,
        payload: display
    }
}