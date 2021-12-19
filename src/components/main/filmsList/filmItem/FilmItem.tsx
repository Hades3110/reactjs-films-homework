import { FilmPropertyInterface } from './types'
import { GenreInterface } from '../../../../services/filmService'
import imageNorFound from '/public/assets/imageNotFound.png'
import iconPlay from '/public/assets/icon_play.png'
import closeIcon from '/public/assets/icon_white_close.png'
import cx from 'classnames'
import styles from './filmItem.module.scss'
import { useDispatch } from 'react-redux'
import { changeVideoWindow } from '../../../../redux/filmVideoPlay/action'
import { useState } from 'react'

const FilmItem = ({ id, title, image, rate, overview, filmGenres, sortType = true, genres }: FilmPropertyInterface) => {

    const [overviewRowOpen, setOverviewRowOpen] = useState<boolean>(false)

    const genreName: GenreInterface[] = genres.filter((el: GenreInterface) => {
        return filmGenres.find((id: number) => id === el.id)
    })

    const dispatch = useDispatch()
    const imageUrl = image ? `https://image.tmdb.org/t/p/original/${image}` : imageNorFound
    const vote = rate ? +(rate / 2).toFixed(1) : 0

    return (
        <div className={sortType ? cx(styles.filmItem, styles.row) : cx(styles.filmItem, styles.column)}>
            <div className={styles.filmImage} style={{ backgroundImage: `url(${imageUrl})` }}>
                {overviewRowOpen ? <div className={styles.filmImage__hover__overview}>
                    <img src={closeIcon} alt="" onClick={() => setOverviewRowOpen(false)} /><div>{overview}</div>
                </div> :
                    <div className={styles.filmImage__hover}>
                        <img
                            src={iconPlay}
                            alt="Icon Play"
                            className={styles.filmImage__hover__icon}
                            onClick={() => dispatch(changeVideoWindow(true, id))}
                        />
                        <button className={styles.filmImage__hover__button} onClick={() => setOverviewRowOpen(true)}>View Info</button>
                    </div>}
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
