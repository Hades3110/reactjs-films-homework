import { useDispatch } from "react-redux";
import { changeDisplayAndSearch } from "../../redux/mainBannerAndSearch/action";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './header.scss'
import imgSearch from '/public/assets/search.png'

const Header = () => {

    const dispatch = useDispatch()

    return (
        <header>
            <Router>
                <Link to="/"><h1>FILMS</h1></Link>
            </Router>
            <div className="search">
                <input
                    type="text"
                    onChange={(e) => e.target.value.length > 0 ? dispatch(changeDisplayAndSearch(false, e.target.value)) : dispatch(changeDisplayAndSearch(true, e.target.value))}
                />
                <img src={imgSearch} alt="" />
            </div>
        </header>
    )
}

export default Header
