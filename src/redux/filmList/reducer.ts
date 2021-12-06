import { FILM_LIST_CATEGORIES_PAGE_COUNT } from "./action";

const initialState = {
    count: 1,
    categories: 'popular'
}

const filmListCategoriesAndPagesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FILM_LIST_CATEGORIES_PAGE_COUNT:
            return {
                ...state,
                count: action.payload.count,
                categories: action.payload.categories
            }
        default:
            return state
    }
}

export default filmListCategoriesAndPagesReducer
