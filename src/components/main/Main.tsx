import React from "react"
import FilmsFilter from "./filmsFilter/FilmsFilter"
import FilmsList from "./filmsList/FilmsList"
import './main.scss'

const Main = () => {
    return (
        <main className="main">
            <FilmsFilter />
            <FilmsList />
            <div className="main__btn">
                <button className="main__btn__more">Load More</button>
            </div>
        </main>
    )
}

export default Main
