import { useState } from "react"
import FilmsFilter from "./filmsFilter/FilmsFilter"
import FilmsList from "./filmsList/FilmsList"
import './main.scss'

const Main = () => {
    const [sortType, setSortType] = useState(1)
    const [listCategories, setListCategories] = useState<string>('popular')

    const sortTypeChange = (type: number) => {
        return type === 1 ? setSortType(1) : setSortType(0)
    }
    const changeListCategories = (categoriesName: string) => {
        return setListCategories(categoriesName)
    }

    return (
        <main className="main">
            <FilmsFilter sortTypeChange={sortTypeChange} sortType={sortType} listCategories={listCategories} changeListCategories={changeListCategories} />
            <FilmsList sortType={sortType} listCategories={listCategories} />
        </main>
    )
}

export default Main
