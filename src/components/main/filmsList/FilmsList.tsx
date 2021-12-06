import { useState, useEffect } from "react"
import FilmItem from "./filmItem/FilmItem"
import { useSelector, useDispatch } from "react-redux"
import { changeFilmCategoriesAndCount } from "../../../redux/filmList/action"
import {
    FilmInterface,
    getFilmlist,
    getGenres,
    GenreInterface
} from "../../../services/filmService"
import './filmList.scss'

const FilmsList = ({ sortType }: { sortType: number }) => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])

    const dispatch = useDispatch()
    const pageCounter = useSelector((state: any) => state.pageCounter.count)
    const categories = useSelector((state: any) => state.pageCounter.categories)

    useEffect(() => {
        if (pageCounter > 1) {
            getFilmlist(categories, pageCounter)
                .then(res => setFilmArr(() => ([...filmArr, ...res.results])))
        } else {
            getFilmlist(categories, pageCounter)
                .then(res => setFilmArr(res.results))
        }
    }, [categories, pageCounter])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])


    return (
        <>
            <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
                {
                    filmArr.map((el: FilmInterface) => {
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
                    })
                }
            </div>
            <div className="btn"
                onClick={() => dispatch(changeFilmCategoriesAndCount(pageCounter + 1, categories))}>
                <button className="btn__more">Load More</button>
            </div>
        </>
    )
}

export default FilmsList
