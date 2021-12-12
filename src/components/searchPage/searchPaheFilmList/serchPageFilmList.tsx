import { useState, useEffect } from 'react'
import FilmItem from '../../main/filmsList/filmItem/FilmItem'
import {
    FilmInterface,
    getGenres,
    GenreInterface,
    getSearchResult
} from '../../../services/filmService'
import uniqid from 'uniqid'
import spinner from '/public/assets/spinner.gif'
import errorMassage from '/public/assets/error.gif'
import { useParams } from 'react-router'
import styles from './searchPageFilmList.module.scss'

const SearchPageFilmList = () => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])
    const [filmNotFount, setFilmNotFount] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    const { id } = useParams()

    useEffect(() => {
        getSearchResult(id ?? '')
            .then(res => {
                const result = res.results.filter(film => film.poster_path && film.title)
                if (result.length > 0) {
                    setFilmNotFount(false)
                    setFilmArr(result)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setFilmNotFount(true)
                }

            })
    }, [id])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    return (
        <>
            {loading ? <img src={spinner} className='spinner' /> :
                (filmNotFount ? <div className={styles.searchErrorMassage}>There are no movies that matched your query.</div> :
                    <div className={styles.filmList}>
                        <div className='filmListRow'>
                            {
                                filmArr.map((el: FilmInterface) => {
                                    return (
                                        <FilmItem
                                            key={uniqid()}
                                            title={el.title ?? 'Name not found'}
                                            image={el.poster_path}
                                            rate={el.vote_average}
                                            overview={el.overview ?? 'No description'}
                                            filmGenres={el.genre_ids}
                                            genres={genres}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>)}
        </>
    )
}

export default SearchPageFilmList
