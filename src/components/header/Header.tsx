import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './header.scss'
import imgSearch from '/public/assets/search.png'

const Header = () => {
    return (
        <header>
            <Router>
                <Link to="/"><h1>FILMS</h1></Link>
            </Router>
            <div className="search">
                <input type="text" />
                <img src={imgSearch} alt="" />
            </div>

        </header>
    )
}

export default Header
