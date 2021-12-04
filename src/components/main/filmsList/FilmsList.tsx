import { useState, useEffect } from "react"
import FilmItem from "./filmItem/FilmItem"
import {
    FilmInterface,
    getTrendingFilm,
    getTopRated,
    getComingSoon,
    getGenres,
    GenreInterface
} from "../../../services/filmService"
import './filmList.scss'

const FilmsList = ({ sortType, listCategories }: { sortType: number, listCategories: string }) => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])
    const [filmCount, setFilmCount] = useState<number>(12)
    const [listEnded, setListEnded] = useState<boolean>(false)

    const changeFilmCount = () => {
        if (filmArr.length - filmCount <= 12) {
            setFilmCount(12 + filmArr.length - filmCount)
            setListEnded(true)
        } else setFilmCount(filmCount + 12)
    }

    useEffect(() => {
        switch (listCategories) {
            case 'trending':
                getTrendingFilm()
                    .then(res => setFilmArr(res.results))
                setFilmCount(12)
                setListEnded(false)
                break
            case 'topRated':
                getTopRated()
                    .then(res => setFilmArr(res.results))
                setFilmCount(12)
                setListEnded(false)
                break
            case 'comingSoon':
                getComingSoon()
                    .then(res => setFilmArr(res.results))
                setFilmCount(12)
                setListEnded(false)
                break
        }
    }, [listCategories])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])
    return (
        <>
            <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
                {
                    filmArr.map((el: FilmInterface, i: number) => {
                        if (i < filmCount) {
                            return (
                                <FilmItem
                                    sortType={sortType}
                                    key={el.id}
                                    title={el.title}
                                    image={el.poster_path}
                                    rate={el.vote_average}
                                    overview={el.overview}
                                    filmGenres={el.genre_ids}
                                    genres={genres}
                                />
                            )
                        }
                    })
                }
            </div>
            <div className="btn"
                onClick={() => changeFilmCount()}
                style={{ 'display': listEnded ? 'none' : 'block' }}>
                <button className="btn__more">Load More</button>
            </div>
        </>
    )
}

export default FilmsList
