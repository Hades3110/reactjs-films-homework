import { useSelector } from 'react-redux'
import { ActionTypeInterface } from '../../global'
import Main from '../main/Main'
import MainBanner from '../mainBanner/MainBanner'

const GeneralPage = () => {

    const watch = useSelector((state: ActionTypeInterface) => state.videoPlayer.watch)

    return (
        <>
            <MainBanner id={561} />
            <Main />
        </>
    )
}

export default GeneralPage
