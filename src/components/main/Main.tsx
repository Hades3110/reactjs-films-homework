import { useState } from "react"
import FilmsFilter from "./filmsFilter/FilmsFilter"
import FilmsList from "./filmsList/FilmsList"
import './main.scss'

const Main = () => {
    const [sortType, setSortType] = useState(1)

    const sortTypeChange = (type: number) => {
        return type === 1 ? setSortType(1) : setSortType(0)
    }

    return (
        <main className="main">
            <FilmsFilter sortTypeChange={sortTypeChange} sortType={sortType} />
            <FilmsList sortType={sortType} />
        </main>
    )
}

export default Main
