import { FILM_LIST_SORT, changeSortType } from '../action';

describe('changeSortType test', () => {
  test('test', () => {
    expect(changeSortType(true)).toEqual({type: FILM_LIST_SORT, payload: true})
  })
  test('test', () => {
    expect(changeSortType(false)).toEqual({type: FILM_LIST_SORT, payload: false})
  })
})