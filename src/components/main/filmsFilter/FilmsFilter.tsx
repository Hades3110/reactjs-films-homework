import { ActionTypeInterface } from '../../../global'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilmCategoriesAndCount } from '../../../redux/filmListCountAndCategories/action'
import { changeSortType } from '../../../redux/filmListSort/action'
import styles from './filmFilter.module.scss'
import cx from 'classnames'

const FilmsFilter = () => {

    const dispatch = useDispatch()
    const categories = useSelector((state: ActionTypeInterface) => state.pageCounter.categories)
    const sortType = useSelector((state: ActionTypeInterface) => state.sortType.type)

    return (
        <div className={styles.filmFilter}>
            <div className={styles.filmFilter__filter}>
                <button
                    className={categories === 'popular' ? cx(styles.filmFilter__filter__btns, styles.activeCategories) : styles.filmFilter__filter__btns}
                    onClick={() => dispatch(changeFilmCategoriesAndCount(1, 'popular'))
                    }>
                    Trending
                </button>
                <button
                    className={categories === 'top_rated' ? cx(styles.filmFilter__filter__btns, styles.activeCategories) : styles.filmFilter__filter__btns}
                    onClick={() => dispatch(changeFilmCategoriesAndCount(1, 'top_rated'))
                    }>
                    Top Rated
                </button>
                <button
                    className={categories === 'upcoming' ? cx(styles.filmFilter__filter__btns, styles.activeCategories) : styles.filmFilter__filter__btns}
                    onClick={() => dispatch(changeFilmCategoriesAndCount(1, 'upcoming'))
                    }>
                    Coming Soon
                </button>
                {/* <button className='filmFilter__filter__btns'>Genre</button> */}
            </div>

            <div className={styles.filmFilter__arrange}>
                <button
                    className={sortType ? cx(styles.filmFilter__arrange__row, styles.activeSort) : styles.filmFilter__arrange__row}
                    onClick={() => dispatch(changeSortType(true))}
                >
                    <div className={styles.filmFilter__arrange__row__el} />
                    <div className={styles.filmFilter__arrange__row__el} />
                    <div className={styles.filmFilter__arrange__row__el} />
                    <div className={styles.filmFilter__arrange__row__el} />
                </button>
                <button
                    className={sortType ? styles.filmFilter__arrange__oneColumn : cx(styles.filmFilter__arrange__oneColumn, styles.activeSort)}
                    onClick={() => dispatch(changeSortType(false))}
                >
                    <div className={styles.filmFilter__arrange__oneColumn__el} />
                    <div className={styles.filmFilter__arrange__oneColumn__el} />
                </button>
            </div>
        </div>
    )
}

export default FilmsFilter
