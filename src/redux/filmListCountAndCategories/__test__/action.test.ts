import { changeFilmCategoriesAndCount, FILM_LIST_CATEGORIES_AND_PAGE_COUNT } from "../action"

describe('changeFilmCategoriesAndCount test', () => {
    test('test', () => {
        expect(changeFilmCategoriesAndCount(1, 'popular')).toEqual({ type: FILM_LIST_CATEGORIES_AND_PAGE_COUNT, payload: { count: 1, categories: 'popular' } })
    })
    test('test', () => {
        expect(changeFilmCategoriesAndCount(2, 'top_rated')).toEqual({ type: FILM_LIST_CATEGORIES_AND_PAGE_COUNT, payload: { count: 2, categories: 'top_rated' } })
    })
})