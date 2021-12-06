import './filmFilter.scss'
import { SortTypeInterface } from './types'
import { useDispatch } from 'react-redux'
import { changeFilmCategoriesAndCount } from '../../../redux/filmList/action'


const FilmsFilter = ({ listCategories, changeListCategories, sortTypeChange, sortType }: SortTypeInterface) => {

    const dispatch = useDispatch()
    return (
        <div className="filmFilter">
            <div className="filmFilter__filter">
                <button
                    className={listCategories === 'popular' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    value='popular'
                    onClick={(e: any): void => {
                        dispatch(changeFilmCategoriesAndCount(1, 'popular'))
                    }
                    }>
                    Trending
                </button>
                <button
                    className={listCategories === 'top_rated' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    value='top_rated'
                    onClick={(e: any): void => {
                        // changeListCategories(e.target.value)
                        dispatch(changeFilmCategoriesAndCount(1, 'top_rated'))
                    }
                    }>
                    Top Rated
                </button>
                <button
                    className={listCategories === 'upcoming' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    value='upcoming'
                    onClick={(e: any): void => {
                        // changeListCategories(e.target.value)
                        dispatch(changeFilmCategoriesAndCount(1, 'upcoming'))
                    }
                    }>
                    Coming Soon
                </button>
                {/* <button className="filmFilter__filter__btns">Genre</button> */}
            </div>

            <div className="filmFilter__arrange">
                <button
                    className={sortType ? 'filmFilter__arrange__row activeSort' : 'filmFilter__arrange__row'}
                    onClick={() => sortTypeChange(1)}
                >
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                </button>
                <button
                    className={sortType ? 'filmFilter__arrange__oneColumn' : 'filmFilter__arrange__oneColumn activeSort'}
                    onClick={() => sortTypeChange(0)}
                >
                    <div className="filmFilter__arrange__oneColumn__el" />
                    <div className="filmFilter__arrange__oneColumn__el" />
                </button>
            </div>
        </div>
    )
}

export default FilmsFilter
