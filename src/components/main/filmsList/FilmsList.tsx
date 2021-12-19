import { useState, useEffect } from 'react'
import { ActionTypeInterface } from '../../../global'
import FilmItem from './filmItem/FilmItem'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilmCategoriesAndCount } from '../../../redux/filmListCountAndCategories/action'
import { changeLoading } from '../../../redux/loading/action'
import {
    FilmInterface,
    getFilmlist,
    getGenres,
    GenreInterface,
} from '../../../services/filmService'
import uniqid from 'uniqid'
import spinner from '/public/assets/spinner.gif'
import errorMassage from '/public/assets/error.gif'
import './filmList.scss'


const FilmsList = () => {

    const [filmArr, setFilmArr] = useState<FilmInterface[]>([])
    const [genres, setGenres] = useState<GenreInterface[]>([])

    const dispatch = useDispatch()
    const pageCounter = useSelector((state: ActionTypeInterface) => state.pageCounter.count)
    const categories = useSelector((state: ActionTypeInterface) => state.pageCounter.categories)
    const sortType = useSelector((state: ActionTypeInterface) => state.sortType.type)
    const isLoaded = useSelector((state: ActionTypeInterface) => state.movieLoader.isLoaded)

    useEffect(() => {

        getFilmlist(categories, pageCounter)
            .then(res => {
                pageCounter > 1 ? setFilmArr([...filmArr, ...res.results.filter(film => film.poster_path && film.title)])
                    : setFilmArr(res.results.filter(film => film.poster_path && film.title))
                dispatch(changeLoading(true))
            })
    }, [categories, pageCounter])

    useEffect(() => {
        getGenres()
            .then(res => setGenres(res.genres))
    }, [])

    return (
        <>
            {isLoaded ? (filmArr.length === 0 ? <div className='errorMassage'><img src={errorMassage} /></div> :
                <>
                    <div className={sortType ? 'filmListRow' : 'filmListColumn'}>
                        {
                            filmArr.map((el: FilmInterface) => {
                                return (
                                    <FilmItem
                                        sortType={sortType}
                                        key={uniqid()}
                                        id={el.id}
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
                    <div className='btn'
                        onClick={() => {
                            dispatch(changeFilmCategoriesAndCount(pageCounter + 1, categories))
                        }}>
                        <button className='btn__more'>Load More</button>
                    </div>
                </>) : <img src={spinner} className='spinner' />}
        </>
    )
}

export default FilmsList
