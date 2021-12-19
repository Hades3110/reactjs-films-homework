import Header from '../header/Header'
import SearchPageFilmList from './searchPaheFilmList/serchPageFilmList'
import Footer from '../footer/Footer'
import './searchPage.scss'
import Video from '../video/Video'
import { useSelector } from 'react-redux'
import { ActionTypeInterface } from '../../global'

const SearchPage = () => {
    const watch = useSelector((state: ActionTypeInterface) => state.videoPlayer.watch)

    return (
        <>
            <Header />
            {watch ? <Video /> : ''}
            <SearchPageFilmList />
            <Footer />
        </>
    )
}

export default SearchPage
