import { useParams } from "react-router"
import MainBanner from "../mainBanner/MainBanner"
import FilmTrailers from "./movieTrailers/MovieTrailers"
import MoreLikeThis from "./moreLikeThis/MoreLikeThis"
import MoviCredits from "./movieCredits/MovieCredits"
import styles from './detailsPage.module.scss'

const DetailsPage = () => {
    const { id } = useParams()

    return (
        <>
            <MainBanner id={id ? parseInt(id) : 0} />
            <div className={styles.filmTrailersAndCredits}>
                <FilmTrailers id={id ? parseInt(id) : 0} />
                <MoviCredits id={id ? parseInt(id) : 0} />
            </div>
            <MoreLikeThis id={id ? parseInt(id) : 0} />
        </>
    )
}

export default DetailsPage
