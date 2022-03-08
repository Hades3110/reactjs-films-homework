import filmListSortReducer from '../reducer';
import { FILM_LIST_SORT } from '../action';

describe('filmListSortReducer test', () => {
  test('correct value', () => {
    expect(filmListSortReducer({ type: true }, { type: FILM_LIST_SORT, payload: false })).toEqual({type: false})
  })
  test('correct value', () => {
    expect(filmListSortReducer({ type: false }, { type: FILM_LIST_SORT, payload: false })).toEqual({type: false})
  })
  test('correct value', () => {
    expect(filmListSortReducer({ type: true }, { type: FILM_LIST_SORT, payload: true })).toEqual({type: true})
  })
  test('correct value', () => {
    expect(filmListSortReducer({ type: false }, { type: FILM_LIST_SORT, payload: true })).toEqual({type: true})
  })
})