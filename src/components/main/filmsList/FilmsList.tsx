import { useState, useEffect } from "react"
import { ActionTypeInterface } from "../../../global"
import FilmItem from "./filmItem/FilmItem"
import { useSelector, useDispatch } from "react-redux"
import { changeFilmCategoriesAndCount } from "../../../redux/filmListCountAndCategories/action"
import { changeLoading } from "../../../redux/loading/action"
import {
    FilmInterface,
    getFilmlist,
    getGenres,
    GenreInterface,
    getSearchResult
} from "../../../services/filmService"
import uniqid from 'uniqid';
import './filmList.scss'
import spinner from '/public/assets/spinner.gif'
import errorMassage from '/public/assets/error.gif'

const FilmsList = () => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])

    const dispatch = useDispatch()
    const pageCounter = useSelector((state: ActionTypeInterface) => state.pageCounter.count)
    const categories = useSelector((state: ActionTypeInterface) => state.pageCounter.categories)
    const sortType = useSelector((state: ActionTypeInterface) => state.sortType.type)
    const isLoaded = useSelector((state: ActionTypeInterface) => state.movieLoader.isLoaded)

    const search = useSelector((state: ActionTypeInterface) => state.mainBannerAndSearch.search)

    useEffect(() => {
        if (search.length > 0) {
            // const handle: ReturnType<typeof setTimeout> = setTimeout(() => {
            getSearchResult(search)
                .then(res => {
                    if (res.results.length > 0) {
                        setFilmArr(res.results.filter(film => film.poster_path && film.title))
                        dispatch(changeLoading(true))
                    } else {
                        console.log('e')
                        dispatch(changeLoading(true))
                    }

                })
            // }, 1000)

            // return () => clearTimeout(handle)
        } else {
            if (pageCounter > 1) {
                getFilmlist(categories, pageCounter)
                    .then(res => {
                        setFilmArr(res.results.filter(film => film.poster_path && film.title))
                        dispatch(changeLoading(true))
                    })
            } else {
                getFilmlist(categories, pageCounter)
                    .then(res => {
                        setFilmArr(res.results.filter(film => film.poster_path && film.title))
                        dispatch(changeLoading(true))
                    })
            }
        }

    }, [categories, pageCounter, search])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    // console.log(filmArr)
    return (
        <>
            {filmArr.length === 0 ? <div className="errorMassage"><img src={errorMassage} /></div> :
                isLoaded ?
                    <>
                        <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
                            {
                                filmArr.map((el: FilmInterface, i: number) => {
                                    return (
                                        <FilmItem
                                            sortType={sortType}
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
                        <div className="btn"
                            onClick={() => {
                                dispatch(changeFilmCategoriesAndCount(pageCounter + 1, categories))
                            }}>
                            <button className="btn__more">Load More</button>
                        </div>
                    </> :
                    <img src={spinner} className="spinner" />}
        </>
    )
}

export default FilmsList
