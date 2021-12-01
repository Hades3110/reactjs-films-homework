import { useState, useEffect } from "react"
import { getGenres, GenreInterface } from "../../../../services/filmService"
import { FilmPropertyInterface } from "./types"
import './filmItem.scss'



const FilmItem = ({ title, image, rate, overview, filmGenre, sortType }: FilmPropertyInterface) => {

    const [genres, setGenres] = useState<GenreInterface[]>([])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    const genreChoice = () => {
        let result = [];
        for (let j = 0; j < genres.length; j++) {
            for (let i = 0; i < filmGenre.length; i++) {
                if (genres[j].id === filmGenre[i]) {
                    result.push(genres[j].name)
                }
            }
        }
        return result.join(' ')
    }
    console.log(genreChoice())
    const imageUrl = `https://image.tmdb.org/t/p/original/${image}`

    return (
        <div className={sortType ? "filmItem row" : "filmItem column"}>
            <img src={imageUrl} alt="" className="filmColumn__image filmImage" />
            <div className="filmItem__title filmTitle">
                <span className="filmItem__title__name filmName">{title}</span>
                <span className="filmItem__title__rating filmRating">{(rate / 2).toFixed(1)}</span>
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
