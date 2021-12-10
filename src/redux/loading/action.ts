export const MOVIE_LOADER = 'MOVIE_LOADER'

export const changeLoading = (isLoaded: boolean) => {
    return {
        type: MOVIE_LOADER,
        payload: isLoaded
    }
}