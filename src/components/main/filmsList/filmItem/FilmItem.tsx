import { FilmPropertyInterface } from "./types"
import './filmItem.scss'
import { GenreInterface } from "../../../../services/filmService"

const FilmItem = ({ title, image, rate, overview, filmGenres, sortType, genres }: FilmPropertyInterface) => {

    const genreName: GenreInterface[] = genres.filter((el: GenreInterface) => {
        for (const filmGenre of filmGenres) {
            if (el.id === filmGenre) return true
        }
    })
    const imageUrl = `https://image.tmdb.org/t/p/original/${image}`
    const vote = rate ? +(rate / 2).toFixed(1) : 0

    return (
        <div className={sortType ? "filmItem row" : "filmItem column"}>
            <img src={imageUrl} alt="" className="filmColumn__image filmImage" />
            <div className="filmItem__title filmTitle">
                <span className="filmItem__title__name filmName">{title}</span>
                <span className="filmItem__title__rating filmRating">{vote}</span>
                <div className="filmItem__title__genres filmGenre">
                    {genreName.map((el: GenreInterface) => {
                        return <span className="filmItem__title__genres__el" key={el.id}>{el.name}</span>
                    })}
                </div>
                {sortType ? null : <div overview={overview} className="filmOverview">
                    <span>Overview</span>
                    <span>{overview}</span>
                </div>
                }
            </div>
        </div>
    )
}

export default FilmItem
