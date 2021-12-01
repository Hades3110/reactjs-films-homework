import React, { useState, useEffect } from 'react'
import { FilmInfoInterface, GenreInterface, getHeadFilm } from '../../services/filmService'
import './mainBanner.scss'



const MainBanner: React.FC = () => {

    const [filmInfo, setFilmInfo] = useState({} as FilmInfoInterface)

    useEffect(() => {
        getHeadFilm()
            .then(res => setFilmInfo(res as FilmInfoInterface))
    }, [])

    const bgImage: string = filmInfo.backdrop_path

    return (
        <div className="majorFilm" style={{
            backgroundImage: bgImage ? `url("https://image.tmdb.org/t/p/original${bgImage}")` : ''
        }}>
            <div className="infoAndRating">
                <h1>{filmInfo.title as string}</h1>
                <div className="infoAndRating__moreInfo">
                    <ul>
                        {filmInfo.genres ? filmInfo.genres.map((el: GenreInterface) => <li key={el.id}>{el.name}</li>) : ''}
                        <li>|</li>
                        <li>1h 46m</li>
                    </ul>
                </div>
                <div className="infoAndRating__ratingAndBtn">
                    <div className="infoAndRating__ratingAndBtn__rating">
                        <span className="infoAndRating__ratingAndBtn__rating__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                        </span>
                        <div className="infoAndRating__ratingAndBtn__rating__num">{filmInfo.vote_average ? (filmInfo.vote_average / 2).toFixed(1) : 0}</div>
                    </div>
                    <div className="infoAndRating__ratingAndBtn__btns">
                        <button className="infoAndRating__ratingAndBtn__btns__watch">Watch now</button>
                        <button className="infoAndRating__ratingAndBtn__btns__view">View Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
