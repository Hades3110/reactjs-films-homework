import { useSelector } from "react-redux"
import { ActionTypeInterface } from "../../global"
import FilmsFilter from "./filmsFilter/FilmsFilter"
import FilmsList from "./filmsList/FilmsList"
import './main.scss'

const Main = () => {

    const display = useSelector((state: ActionTypeInterface) => state.mainBannerAndSearch.display)

    return (
        <main className="main" style={{ marginTop: display ? 0 : '5em' }}>
            <FilmsFilter />
            <FilmsList />
        </main>
    )
}

export default Main
