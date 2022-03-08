import filmListCategoriesAndPagesReducer, { initialState } from '../reducer';
import { FILM_LIST_CATEGORIES_AND_PAGE_COUNT } from '../action';

describe('filmListCategoriesAndPagesReducer test', () => {
    test('correct value', () => {
        expect(filmListCategoriesAndPagesReducer(initialState, { type: FILM_LIST_CATEGORIES_AND_PAGE_COUNT, payload: { count: 1, categories: 'popular' } })).toEqual({ count: 1, categories: 'popular' })
    })
    test('correct value', () => {
        expect(filmListCategoriesAndPagesReducer(initialState, { type: FILM_LIST_CATEGORIES_AND_PAGE_COUNT, payload: { count: 2, categories: 'top_rated' } })).toEqual({ count: 2, categories: 'top_rated' })
    })
    test('correct value', () => {
        expect(filmListCategoriesAndPagesReducer(initialState, { type: FILM_LIST_CATEGORIES_AND_PAGE_COUNT, payload: { count: 3, categories: 'upcoming' } })).toEqual({ count: 3, categories: 'upcoming' })
    })
})