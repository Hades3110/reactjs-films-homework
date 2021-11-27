import { FilmPropertyInterface } from "./types"
import './filmRow.scss'

const FilmRow = ({ title, image, rate }: FilmPropertyInterface) => {
    const imageUrl = `https://image.tmdb.org/t/p/original/${image}`
    return (
        <div className="filmRow">
            <img src={imageUrl} alt="" className="filmRow__image" />
            <div className="filmRow__title">
                <span className="filmRow__title__name">{title}</span>
                <span className="filmRow__title__rating">{(rate / 2 ).toFixed(1)}</span>
                <span className="filmRow__title__genre">Action , Fantasy , Adventure</span>
            </div>
        </div>
    )
}

export default FilmRow
