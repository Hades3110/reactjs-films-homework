export const HEADER_SEARCH = 'HEADER_SEARCH'

export const changeDisplayAndSearch = (display: boolean, search: string) => {
    return {
        type: HEADER_SEARCH,
        payload: {
            display,
            search
        }
    }
}