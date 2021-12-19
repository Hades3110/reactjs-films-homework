import { useSelector } from 'react-redux'
import { ActionFromReducer } from 'redux'
import { ActionTypeInterface } from '../../global'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Main from '../main/Main'
import MainBanner from '../mainBanner/MainBanner'
import Video from '../video/Video'

const GeneralPage = () => {

    const watch = useSelector((state: ActionTypeInterface) => state.videoPlayer.watch)

    return (
        <>
            <Header />
            {watch ? <Video /> : ''}
            <MainBanner />
            <Main />
            <Footer />
        </>
    )
}

export default GeneralPage
