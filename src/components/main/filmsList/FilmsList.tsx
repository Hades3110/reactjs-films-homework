import { useState, useEffect } from "react"
import { ActionTypeInterface } from "../../../global"
import FilmItem from "./filmItem/FilmItem"
import { useSelector, useDispatch } from "react-redux"
import { changeFilmCategoriesAndCount } from "../../../redux/filmListCountAndCategories/action"
import {
    FilmInterface,
    getFilmlist,
    getGenres,
    GenreInterface
} from "../../../services/filmService"
import uniqid from 'uniqid';
import './filmList.scss'

const FilmsList = () => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])

    const dispatch = useDispatch()
    const pageCounter = useSelector((state: ActionTypeInterface) => state.pageCounter.count)
    const categories = useSelector((state: ActionTypeInterface) => state.pageCounter.categories)
    const sortType = useSelector((state: ActionTypeInterface) => state.sortType.type)

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
                    filmArr.map((el: FilmInterface, i: number) => {
                        return (
                            <FilmItem
                                sortType={sortType}
                                key={uniqid()}
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
