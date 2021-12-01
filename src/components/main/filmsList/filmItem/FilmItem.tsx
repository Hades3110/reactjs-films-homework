import { useState, useEffect } from "react"
import { getGenres, GenreInterface } from "../../../../services/filmService"
import { FilmPropertyInterface } from "./types"
import './filmItem.scss'

const FilmItem = ({ title, image, rate, overview, filmGenres, sortType }: FilmPropertyInterface) => {

    const [genres, setGenres] = useState<GenreInterface[]>([])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    const genreChoice = () => {
        const result = [];
        for (const genre of genres) {
            for (const filmGenre of filmGenres) {
                if (genre.id === filmGenre) {
                    result.push(genre.name)
                }
            }
        }
        return result.join(' ');
    }

    const imageUrl = `https://image.tmdb.org/t/p/original/${image}`

    return (
        <div className={sortType ? "filmItem row" : "filmItem column"}>
            <img src={imageUrl} alt="" className="filmColumn__image filmImage" />
            <div className="filmItem__title filmTitle">
                <span className="filmItem__title__name filmName">{title}</span>
                <span className="filmItem__title__rating filmRating">{rate ? +(rate / 2).toFixed(1) : 0}</span>
                <span className="filmItem__title__genre filmGenre">{genreChoice()}</span>
                {sortType ? null : <Overview overview={overview} />}
            </div>
        </div>
    )
}

const Overview = ({ overview }: { overview: string }) => {
    return (
        <div className="filmOverview">
            <span>Overview</span>
            <span>{overview}</span>
        </div>
    )
}

export default FilmItem
