export interface ActionTypeInterface {
    pageCounter: { count: number, categories: string }
    sortType: { type: boolean }
    mainBannerAndSearch: { display: boolean, search: string }
    movieLoader: { isLoaded: boolean }
}