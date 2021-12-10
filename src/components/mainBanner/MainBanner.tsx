import React, { useState, useEffect } from 'react'
import { FilmInfoInterface, GenreInterface, getHeadFilm } from '../../services/filmService'
import StarRatings from 'react-star-ratings';
import './mainBanner.scss'
import { useSelector } from 'react-redux';
import { ActionTypeInterface } from '../../global';

const MainBanner: React.FC = () => {

    const [filmInfo, setFilmInfo] = useState({} as FilmInfoInterface)

    useEffect(() => {
        getHeadFilm()
            .then(res => setFilmInfo(res as FilmInfoInterface))
    }, [])

    const display = useSelector((state: ActionTypeInterface) => state.mainBannerAndSearch.display)

    const bgImage: string = filmInfo.backdrop_path
    const vote = filmInfo.vote_average ? +(filmInfo.vote_average / 2).toFixed(1) : 0

    return (
        <div className="majorFilm" style={{
            display: display ? 'flex' : 'none',
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
                        <StarRatings
                            rating={vote}
                            starRatedColor="#5db9e5"
                            numberOfStars={5}
                            name='rating'
                            starDimension={'26px'}
                        />
                        <div className="infoAndRating__ratingAndBtn__rating__num">{vote}</div>
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
