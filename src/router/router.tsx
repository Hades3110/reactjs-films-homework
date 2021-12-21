import SearchPage from '../components/searchPage/SearchPage'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import GeneralPage from '../components/geneeralPage/GeneralPage'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import DetalsPage from '../components/detalsPage/DetalPage'
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
                <Route path='/' element={<GeneralPage />} />
                <Route path='/movie/:id' element={<DetalsPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RoutePages
