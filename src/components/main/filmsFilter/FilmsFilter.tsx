import './filmFilter.scss'
import { ActionTypeInterface } from '../../../global'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilmCategoriesAndCount } from '../../../redux/filmListCountAndCategories/action'
import { changeSortType } from '../../../redux/filmListSort/action'


const FilmsFilter = () => {

    const dispatch = useDispatch()
    const categories = useSelector((state: ActionTypeInterface) => state.pageCounter.categories)
    const sortType = useSelector((state: ActionTypeInterface) => state.sortType.type)

    return (
        <div className="filmFilter">
            <div className="filmFilter__filter">
                <button
                    className={categories === 'popular' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    onClick={() => dispatch(changeFilmCategoriesAndCount(1, 'popular'))
                    }>
                    Trending
                </button>
                <button
                    className={categories === 'top_rated' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    onClick={() => dispatch(changeFilmCategoriesAndCount(1, 'top_rated'))
                    }>
                    Top Rated
                </button>
                <button
                    className={categories === 'upcoming' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    onClick={() => dispatch(changeFilmCategoriesAndCount(1, 'upcoming'))
                    }>
                    Coming Soon
                </button>
                {/* <button className="filmFilter__filter__btns">Genre</button> */}
            </div>

            <div className="filmFilter__arrange">
                <button
                    className={sortType ? 'filmFilter__arrange__row activeSort' : 'filmFilter__arrange__row'}
                    onClick={() => dispatch(changeSortType(true))}
                >
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                </button>
                <button
                    className={sortType ? 'filmFilter__arrange__oneColumn' : 'filmFilter__arrange__oneColumn activeSort'}
                    onClick={() => dispatch(changeSortType(false))}
                >
                    <div className="filmFilter__arrange__oneColumn__el" />
                    <div className="filmFilter__arrange__oneColumn__el" />
                </button>
            </div>
        </div>
    )
}

export default FilmsFilter
