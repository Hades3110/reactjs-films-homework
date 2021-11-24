import React from "react"
import { FilmPropertyInterface } from "./types"
import './film.scss'

const Film = ({ title, image, rate }: FilmPropertyInterface) => {
    const imageUrl = `https://image.tmdb.org/t/p/original/${image}`
    return (
        <div className="film">
            <img src={imageUrl} alt="" className="film__image" />
            <div className="film__title">
                <span className="film__title__name">{title}</span>
                <span className="film__title__rating">{rate}</span>
                <span className="film__title__genre">Action , Fantasy , Adventure</span>
            </div>
        </div>
    )
}

export default Film