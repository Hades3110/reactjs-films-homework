import React, { useState, useEffect } from 'react'
import FilmService from '../../services/filmService'
import { GenresInterface } from './types'
import './header.scss'

const Header: React.FC = () => {

    const filmService = new FilmService()

    const [filmInfo, setFilmInfo] = useState<any>([])

    useEffect(() => {
        filmService.getHeadFilm()
            .then(res => setFilmInfo(res))
    }, [])

    const bgImage: string = filmInfo.backdrop_path

    return (
        <header style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${bgImage}")`
        }}>
            <div className="infoAndRating">
                <h1>{filmInfo.title}</h1>
                <div className="infoAndRating__moreInfo">
                    <ul>
                        {filmInfo.genres ? filmInfo.genres.map((el: GenresInterface) => <li key={el.id}>{el.name}</li>) : ""}
                        <li>|</li>
                        <li>1h 46m</li>
                    </ul>
                </div>
                <div className="infoAndRating__ratingAndBtn">
                    <div className="infoAndRating__ratingAndBtn__rating">
                        <span className="infoAndRating__ratingAndBtn__rating__stars">
                            &#9733; &#9733; &#9733; &#9733; &#9733;
                        </span>
                        <div className="infoAndRating__ratingAndBtn__rating__num">{filmInfo.vote_average ? filmInfo.vote_average / 2 : 0}</div>
                    </div>
                    <div className="infoAndRating__ratingAndBtn__btns">
                        <button className="infoAndRating__ratingAndBtn__btns__watch">Watch now</button>
                        <button className="infoAndRating__ratingAndBtn__btns__view">View Info</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
