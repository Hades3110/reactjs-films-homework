export const FILM_LIST_CATEGORIES_PAGE_COUNT = 'FILM_LIST_CATEGORIES_PAGE_COUNT'

export const changeFilmCategoriesAndCount = (count: number, categories: string) => {
    return {
        type: FILM_LIST_CATEGORIES_PAGE_COUNT,
        payload: { count: count, categories: categories }
    }
}

