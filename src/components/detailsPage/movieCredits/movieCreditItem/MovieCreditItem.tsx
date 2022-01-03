import { CreditInterface } from '../../../../services/filmService'
import imageNorFound from '/public/assets/imageNotFound.png'
import styles from './movieCreditItem.module.scss'

const MovieCreditsItem = ({ character, gender, name, profile_path }: CreditInterface) => {
    const imageUrl = profile_path ? `https://image.tmdb.org/t/p/original/${profile_path}` : imageNorFound
    const sex = gender === 1 ? "Women" : 'Men'

    return (<div className={styles.card}>
        <img src={imageUrl} alt={name} />
        <div className={styles.card__info}>
            <div>Character: {character}</div>
            <div>Name:{name}</div>
            <div>Sex: {sex}</div>
        </div>
    </div>)
}

export default MovieCreditsItem