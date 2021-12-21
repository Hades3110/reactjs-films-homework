import { useState, useEffect } from 'react'
import FilmItem from '../../main/filmsList/filmItem/FilmItem'
import {
    FilmInterface,
    getGenres,
    GenreInterface,
    getSearchResult
} from '../../../services/filmService'
import spinner from '/public/assets/spinner.gif'
import { useLocation } from 'react-router'
import styles from './searchResults.module.scss'

const Searchresults = () => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])
    const [filmNotFount, setFilmNotFount] = useState<boolean>(false)
    const [isLoaded, setIsLoading] = useState<boolean>(false)

    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const film = searchParams.get('film')

    useEffect(() => {
        getSearchResult(film ?? '')
            .then(res => {
                const result = res.results.filter((film, index, self) =>
                    self.findIndex((t) => (
                        t.id === film.id
                    ))
                )
                if (result.length > 0) {
                    setFilmNotFount(false)
                    setFilmArr(result.filter(film => film.poster_path && film.title))
                    setIsLoading(true)
                } else {
                    setIsLoading(true)
                    setFilmNotFount(true)
                }
            })
    }, [film])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    return (
        <>
            {isLoaded ? <img src={spinner} className={styles.spinner} /> :
                (filmNotFount ? <div className={styles.searchErrorMassage}>There are no movies that matched your query.</div> :
                    <div className={styles.filmList}>
                        <div className='filmListRow'>
                            {
                                filmArr.map((el: FilmInterface) => {
                                    return (
                                        <FilmItem
                                            key={el.id}
                                            id={el.id}
                                            title={el.title === '' ? 'NAME NOT FOUND' : el.title}
                                            image={el.poster_path}
                                            rate={el.vote_average}
                                            overview={el.overview === '' ? 'No Description' : el.overview}
                                            filmGenres={el.genre_ids}
                                            genres={genres}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Searchresults
