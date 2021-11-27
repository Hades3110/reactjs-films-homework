import './filmFilter.scss'
import { SortTypeInterface } from './types'

const FilmsFilter = ({ sortTypeChange, sortType }: SortTypeInterface) => {

    return (
        <div className="filmFilter">
            <div className="filmFilter__filter">
                <button id="active" className="filmFilter__filter__btns">Trending</button>
                <button className="filmFilter__filter__btns">Top Rated</button>
                <button className="filmFilter__filter__btns">Coming Soon</button>
                <button className="filmFilter__filter__btns">Genre</button>
            </div>

            <div className="filmFilter__arrange">
                <button
                    className="filmFilter__arrange__row"
                    id={sortType ? 'activeBtn' : ''}
                    onClick={() => sortTypeChange(1)}
                >
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                    <div className="filmFilter__arrange__row__el" />
                </button>
                <button
                    className="filmFilter__arrange__oneColumn"
                    id={sortType ? '' : 'activeBtn'}
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
