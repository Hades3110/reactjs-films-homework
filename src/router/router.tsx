import SearchPage from '../components/searchPage/SearchPage'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import GeneralPage from '../components/geneeralPage/GeneralPage'

const RoutePages = () => (
    <Router>
        <Routes>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/' element={<GeneralPage />} />
        </Routes>
    </Router>
)

export default RoutePages
