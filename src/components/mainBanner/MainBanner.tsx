import React, { useState, useEffect } from 'react'
import { FilmInfoInterface, GenreInterface, getFilmVideo, getHeadFilm } from '../../services/filmService'
import StarRatings from 'react-star-ratings'
import styles from './mainBanner.module.scss'
import ReactPlayer from 'react-player'

const initialState: FilmInfoInterface = {
    id: 0,
    backdrop_path: '',
    page: 1,
    genres: [],
    title: '',
    results: [],
    total_pages: 1,
    total_results: 1,
    vote_average: 1,
    runtime: 1,
    overview: ''
}

const MainBanner: React.FC = () => {

    const [filmInfo, setFilmInfo] = useState<FilmInfoInterface>(initialState)
    const [overview, setOverview] = useState<boolean>(false)
    const [watch, setWatch] = useState<boolean>(false)
    const [videoKey, setVideoKey] = useState<string>('')

    useEffect(() => {
        getHeadFilm().then(res => setFilmInfo(res))
        if (filmInfo.id) getFilmVideo(filmInfo.id).then(res => setVideoKey(res.results[0].key))
    }, [filmInfo.id])

    const bgImage: string = filmInfo.backdrop_path
    const vote = filmInfo.vote_average ? +(filmInfo.vote_average / 2).toFixed(1) : 0
    const runtime = `${~~(filmInfo.runtime / 60)}h  ${filmInfo.runtime % 60}m`

    return (<>
        {watch ? <div className={styles.video} onClick={() => {
            setWatch(false)
        }
        }>
            <ReactPlayer
                className={styles.player}
                url={`https://www.youtube.com/watch?v=${videoKey}`}
                controls={true}
                width={'60%'}
                height={'70vh'}
            />
        </div> : ''}
        <div className={styles.majorFilm} style={{
            backgroundImage: bgImage ? `url('https://image.tmdb.org/t/p/original${bgImage}')` : ''
        }}>
            <div className={styles.infoAndRating}>
                <div className={styles.infoAndRating__moreInfo}>
                    <div>
                        <h1>{filmInfo.title}</h1>
                        <ul>
                            {filmInfo.genres ? filmInfo.genres.map((el: GenreInterface) => <li key={el.id}>{el.name}</li>) : ''}
                            <li>|</li>
                            <li>{runtime}</li>
                        </ul>
                    </div>
                    <div className={styles.overview} style={overview ? { display: 'block' } : { display: 'none' }}>{filmInfo.overview}</div>
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
                        <button className={styles.infoAndRating__ratingAndBtn__btns__watch} onClick={() => {
                            setWatch(true)
                        }
                        }>Watch now</button>
                        <button id={overview ? styles.btnView : ''} onClick={() => setOverview(!overview)}>View Info</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default MainBanner
