import { useEffect, useState } from 'react'
import { FilmInterface, GenreInterface, getGenres, getRecommendations } from '../../../services/filmService'
import FilmItem from '../../main/filmsList/filmItem/FilmItem'
import styles from './moreLikeThis.module.scss'
// import spinner from '/public/assets/spinner.gif'

const MoreLikeThis = ({ id }: { id: number }) => {
    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])
    const [isFilmFound, setIsFilmFound] = useState<boolean>(true)
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
                    setFilmArr(result.filter(film => film.poster_path && film.title))
                    setIsLoading(true)
                } else {
                    setIsLoading(true)
                    setIsFilmFound(false)
                }
            })
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [id])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    return (<>
        {isLoaded ?
            (isFilmFound ? <div className={styles.filmList}>
                <div className={styles.more}>MORE LIKE THIS</div>
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
            </div> : '')
            : <img src="https://i.ibb.co/YR4Nw2x/spinner.gif" className={styles.spinner} />
        }
    </>)
}

export default MoreLikeThis