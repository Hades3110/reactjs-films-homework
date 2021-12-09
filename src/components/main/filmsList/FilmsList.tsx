import { useState, useEffect } from "react"
import { ActionTypeInterface } from "../../../global"
import FilmItem from "./filmItem/FilmItem"
import { useSelector, useDispatch } from "react-redux"
import { changeFilmCategoriesAndCount } from "../../../redux/filmListCountAndCategories/action"
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

const FilmsList = () => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])
    const [onLoaded, setOnLoaded] = useState<boolean>(true)

    const dispatch = useDispatch()
    const pageCounter = useSelector((state: ActionTypeInterface) => state.pageCounter.count)
    const categories = useSelector((state: ActionTypeInterface) => state.pageCounter.categories)
    const sortType = useSelector((state: ActionTypeInterface) => state.sortType.type)

    const search = useSelector((state: ActionTypeInterface) => state.mainBannerAndSearch.search)

    useEffect(() => {
        if (search.length > 0) {
            // const handle: ReturnType<typeof setTimeout> = setTimeout(() => {
            getSearchResult(search)
                .then(res => {
                    if (res.results.length > 0) {
                        setFilmArr(res.results)
                        setOnLoaded(false)
                    } else {
                        console.log('e')
                    }

                })
            // }, 1000)

            // return () => clearTimeout(handle)
        } else {
            if (pageCounter > 1) {
                getFilmlist(categories, pageCounter)
                    .then(res => {
                        setFilmArr(() => ([...filmArr, ...res.results]))
                        setOnLoaded(false)
                    })
                setOnLoaded(false)
            } else {
                getFilmlist(categories, pageCounter)
                    .then(res => {
                        setFilmArr(res.results)
                        setOnLoaded(false)
                    })
            }
        }

    }, [categories, pageCounter, search])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    return (
        <>
            {onLoaded ? <img src={spinner} className="spinner" /> : <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
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
            </div>}
            <div className="btn"
                onClick={() => {
                    dispatch(changeFilmCategoriesAndCount(pageCounter + 1, categories))
                }}>
                <button className="btn__more">Load More</button>
            </div>
        </>
    )
}

export default FilmsList
