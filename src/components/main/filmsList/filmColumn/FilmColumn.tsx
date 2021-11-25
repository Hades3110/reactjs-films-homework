import { FilmPropertyInterface } from "./types"
import './filmColumn.scss'

const FilmRow = ({ title, image, rate, overview }: FilmPropertyInterface) => {
    const imageUrl = `https://image.tmdb.org/t/p/original/${image}`
    return (
        <div className="filmColumn">
            <img src={imageUrl} alt="" className="filmColumn__image" />
            <div className="filmColumn__title">
                <span className="filmColumn__title__name">{title}</span>
                <span className="filmColumn__title__rating">{rate}</span>
                <span className="filmColumn__title__genre">Action , Fantasy , Adventure</span>
                <div className="filmColumn__title__overview">
                    <span>Overview</span>
                    <span>{overview}</span>
                </div>
            </div>
        </div>
    )
}

export default FilmRow
