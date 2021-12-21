import { useEffect, useState } from 'react'
import { FilmInterface, GenreInterface, getGenres, getRecommendations } from '../../../services/filmService'
import FilmItem from '../../main/filmsList/filmItem/FilmItem'
import styles from './recFilm.module.scss'
import spinner from '/public/assets/spinner.gif'

const RecFilm = ({ id }: { id: number }) => {
    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])
    const [isFilmFound, setIsFilmFound] = useState<boolean>(false)
    const [isLoaded, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        getRecommendations(id)
            .then(res => {
                const result = res.results.filter((film, index, self) =>
                    self.findIndex((t) => (
                        t.id === film.id
                    ))
                )
                if (result.length > 0) {
                    setIsFilmFound(false)
                    setFilmArr(result.filter(film => film.poster_path && film.title))
                    setIsLoading(true)
                } else {
                    setIsLoading(true)
                    setIsFilmFound(true)
                }
            })
        window.scrollTo(0, 0);
    }, [id])
    console.log(id)

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    return (<>
        <div>REC</div>
        {isLoaded ?
            (isFilmFound ? <div className={styles.searchErrorMassage}>There are no movies that matched your query.</div> :
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
            ) : <img src={spinner} className={styles.spinner} />
        }
    </>)
}

export default RecFilm