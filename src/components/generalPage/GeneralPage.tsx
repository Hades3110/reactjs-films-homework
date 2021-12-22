import { useSelector } from 'react-redux'
import { ActionTypeInterface } from '../../global'
import Main from '../main/Main'
import MainBanner from '../mainBanner/MainBanner'

const GeneralPage = () => (
    <>
        <MainBanner id={561} />
        <Main />
    </>
)

export default GeneralPage
