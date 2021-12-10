export const FILM_LIST_SORT = 'FILM_LIST_SORT'

export const changeSortType = (type: boolean) => {
    return {
        type: FILM_LIST_SORT,
        payload: type
    }
}