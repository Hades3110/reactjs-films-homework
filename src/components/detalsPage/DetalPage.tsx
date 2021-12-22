import { useParams } from "react-router"
import MainBanner from "../mainBanner/MainBanner"
import RecFilm from "./moreLikeThis/MoreLikeThis"

const DetalsPage = () => {
    const { id } = useParams()
    return (
        <>
            <MainBanner id={id ? parseInt(id) : 0} />
            <RecFilm id={id ? parseInt(id) : 0} />
        </>
    )
}

export default DetalsPage
