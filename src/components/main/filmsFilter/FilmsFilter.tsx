import './filmFilter.scss'
import { SortTypeInterface } from './types'

const FilmsFilter = ({ listCategories, changeListCategories, sortTypeChange, sortType }: SortTypeInterface) => {

    return (
        <div className="filmFilter">
            <div className="filmFilter__filter">
                <button
                    className={listCategories === 'trending' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    value='trending'
                    onClick={(evt) => changeListCategories(evt.target.value)}>
                    Trending
                </button>
                <button
                    className={listCategories === 'topRated' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    value='topRated'
                    onClick={(evt) => changeListCategories(evt.target.value)}>
                    Top Rated
                </button>
                <button
                    className={listCategories === 'comingSoon' ? 'filmFilter__filter__btns activeCategories' : 'filmFilter__filter__btns'}
                    value='comingSoon'
                    onClick={(e: React.ChangeEvent<HTMLInputElement>) => changeListCategories(e.target.value)}>
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
