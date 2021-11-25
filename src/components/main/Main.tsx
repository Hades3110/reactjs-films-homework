import { useState } from "react"
import FilmsFilter from "./filmsFilter/FilmsFilter"
import FilmsList from "./filmsList/FilmsList"
import './main.scss'

const Main = () => {
    const [sortType, setSortType] = useState(1);

    const sortTypeChange = (type: number) => {
        if (type === 1) {
            setSortType(() => 1)
        } else setSortType(() => 0)
    }
    console.log(sortType)
    return (
        <main className="main">
            <FilmsFilter sortTypeChange={sortTypeChange} sortType={sortType} />
            <FilmsList sortType={sortType} />
            <div className="main__btn">
                <button className="main__btn__more">Load More</button>
            </div>
        </main>
    )
}
export default Main
