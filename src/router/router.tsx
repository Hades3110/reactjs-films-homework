import SearchPage from '../components/searchPage/SearchPage'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import GeneralPage from '../components/generalPage/GeneralPage'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import DetailsPage from '../components/detailsPage/DetailsPage'
import Video from '../components/video/Video'
import { useSelector } from 'react-redux'
import { ActionTypeInterface } from '../global'

const RoutePages = () => {
    const watch = useSelector((state: ActionTypeInterface) => state.videoPlayer.watch)

    return (
        <Router>
            <Header />
            {watch ? <Video /> : ''}
            <Routes>
                <Route path='/search' element={<SearchPage />} />
                <Route path='/reactjs-films-homework' element={<GeneralPage />} />
                <Route path='/movie/:id' element={<DetailsPage />} />
                <Route path='/' element={<Navigate replace to="/reactjs-films-homework" />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RoutePages
