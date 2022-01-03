import { useEffect, useState } from "react"
import { CreditInterface, getMovieCredits } from "../../../services/filmService"
import MovieCreditsItem from "./movieCreditItem/MovieCreditItem"
import styles from './movieCredits.module.scss'
import cx from 'classnames'


const MoviCredits = ({ id }: { id: number }) => {
    const [credits, setCredits] = useState<CreditInterface[]>([])

    useEffect(() => {
        id ? getMovieCredits(id).then(res => setCredits(res.cast)) : ''
    }, [id])
    console.log(credits)

    return (
        <div className={credits.length > 0 ? cx(styles.creditList, styles.scroll) : styles.creditList}>
            {credits.length > 0 ?
                credits.map((el) => {
                    return <MovieCreditsItem character={el.character} gender={el.gender} key={el.id} name={el.name} profile_path={el.profile_path} />
                })
                : 'No information'}
        </div>)
}

export default MoviCredits