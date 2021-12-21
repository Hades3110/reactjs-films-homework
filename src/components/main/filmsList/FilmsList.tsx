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
                let result = []
                if (pageCounter > 1) {
                    result = [...filmArr, ...res.results].filter((film, index, self) =>
                        self.findIndex((t) => (
                            t.id === film.id
                        ))
                    )
                } else {
                    result = res.results.filter((film, index, self) =>
                        self.findIndex((t) => (
                            t.id === film.id
                        ))
                    )
                }
                result.length -= result.length % 5
                setFilmArr(result.filter(film => film.poster_path && film.title))
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
                    <div className='btn'
                        onClick={() => {
                            dispatch(changeFilmCategoriesAndCount(pageCounter + 1, categories))
                        }}>
                        <button className='btn__more'>Load More</button>
                    </div>
                </>) : <img src={spinner} className='spinner' />
            }
        </>
    )
}

export default FilmsList
