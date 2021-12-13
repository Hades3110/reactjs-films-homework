import React, { useState, useEffect } from 'react'
import { FilmInfoInterface, GenreInterface, getHeadFilm } from '../../services/filmService'
import StarRatings from 'react-star-ratings'
import styles from './mainBanner.module.scss'

const initialState: FilmInfoInterface = {
    backdrop_path: '',
    page: 1,
    genres: [],
    title: '',
    results: [],
    total_pages: 1,
    total_results: 1,
    vote_average: 1,
    runtime: 1
}

const MainBanner: React.FC = () => {

    const [filmInfo, setFilmInfo] = useState<FilmInfoInterface>(initialState)

    useEffect(() => {
        getHeadFilm().then(res => setFilmInfo(res))
    }, [])

    const bgImage: string = filmInfo.backdrop_path
    const vote = filmInfo.vote_average ? +(filmInfo.vote_average / 2).toFixed(1) : 0
    const runtime = `${~~(filmInfo.runtime / 60)}h  ${filmInfo.runtime % 60}m`
    return (
        <div className={styles.majorFilm} style={{
            backgroundImage: bgImage ? `url('https://image.tmdb.org/t/p/original${bgImage}')` : ''
        }}>
            <div className={styles.infoAndRating}>
                <h1>{filmInfo.title as string}</h1>
                <div className={styles.infoAndRating__moreInfo}>
                    <ul>
                        {filmInfo.genres ? filmInfo.genres.map((el: GenreInterface) => <li key={el.id}>{el.name}</li>) : ''}
                        <li>|</li>
                        <li>{runtime}</li>
                    </ul>
                </div>
                <div className={styles.infoAndRating__ratingAndBtn}>
                    <div className={styles.infoAndRating__ratingAndBtn__rating}>
                        <StarRatings
                            rating={vote}
                            starRatedColor='#5db9e5'
                            numberOfStars={5}
                            name='rating'
                            starDimension={'26px'}
                        />
                        <div className={styles.infoAndRating__ratingAndBtn__rating__num}>{vote}</div>
                    </div>
                    <div className={styles.infoAndRating__ratingAndBtn__btns}>
                        <button className={styles.infoAndRating__ratingAndBtn__btns__watch}>Watch now</button>
                        <button className={styles.infoAndRating__ratingAndBtn__btns__view}>View Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
