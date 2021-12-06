export interface SortTypeInterface {
    listCategories: string
    changeListCategories(categoriesName: string): void
    sortTypeChange(number: number): void
    sortType: number
}