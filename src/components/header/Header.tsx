import { useDispatch } from "react-redux";
import { changeBannerDisplay } from "../../redux/mainBanner/action";
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
                <input type="text" onChange={(e) => e.target.value.length > 0 ? dispatch(changeBannerDisplay(false)) : dispatch(changeBannerDisplay(true))} />
                <img src={imgSearch} alt="" />
            </div>
        </header>
    )
}

export default Header
