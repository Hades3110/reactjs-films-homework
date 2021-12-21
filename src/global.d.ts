export interface ActionTypeInterface {
    pageCounter: { count: number, categories: string }
    sortType: { type: boolean }
    searchValue: { search: string }
    movieLoader: { isLoaded: boolean }
    videoPlayer: { watch: boolean, id: number }
}
