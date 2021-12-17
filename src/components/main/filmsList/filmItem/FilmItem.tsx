import { FilmPropertyInterface } from './types'
import { GenreInterface } from '../../../../services/filmService'
import imageNorFound from '/public/assets/imageNotFound.png'
import cx from 'classnames'
import styles from './filmItem.module.scss'

const FilmItem = ({ title, image, rate, overview, filmGenres, sortType = true, genres }: FilmPropertyInterface) => {

    const genreName: GenreInterface[] = genres.filter((el: GenreInterface) => {
        return filmGenres.find((id: number) => id === el.id)
    })

    const imageUrl = image ? `https://image.tmdb.org/t/p/original/${image}` : imageNorFound
    const vote = rate ? +(rate / 2).toFixed(1) : 0

    return (
        <div className={sortType ? cx(styles.filmItem, styles.row) : cx(styles.filmItem, styles.column)}>
            <div className={styles.filmImage}>
                <img src={imageUrl} alt='film banner' className={styles.filmColumn__image} />
            </div>
            <div className={cx(styles.filmItem__title, styles.filmTitle)}>
                <span className={cx(styles.filmItem__title__name, styles.filmName)}>{title}</span>
                <span className={cx(styles.filmItem__title__rating, styles.filmRating)}>{vote}</span>
                <div className={cx(styles.filmItem__title__genres, styles.filmGenre)}>
                    {genreName.map((el: GenreInterface) => {
                        return <span className={styles.filmItem__title__genres__el} key={el.id}>{el.name}</span>
                    })}
                </div>
                {sortType ? null : <div className={styles.filmOverview}>
                    <span>Overview</span>
                    <span>{overview}</span>
                </div>
                }
            </div>
        </div>
    )
}

export default FilmItem
