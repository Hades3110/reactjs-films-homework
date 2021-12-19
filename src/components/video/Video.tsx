import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useDispatch, useSelector } from "react-redux"
import { ActionTypeInterface } from "../../global"
import { changeVideoWindow } from "../../redux/filmVideoPlay/action"
import { getFilmVideo } from "../../services/filmService"
import styles from './video.module.scss'

const Video = () => {

    const [key, setKey] = useState<string>('')

    const dispatch = useDispatch()
    const watch = useSelector((state: ActionTypeInterface) => state.videoPlayer.watch)
    const id = useSelector((state: ActionTypeInterface) => state.videoPlayer.id)

    useEffect(() => {
        if (id) getFilmVideo(id).then(res => setKey(res.results[0].key))
    })
    console.log(key)

    return (<>
        {watch ? <div className={styles.video} onClick={() => {
            dispatch(changeVideoWindow(false, 0))
        }
        }>
            {key ? <><ReactPlayer
                className={styles.player}
                url={`https://www.youtube.com/watch?v=${key}`}
                controls={true}
                width={'60%'}
                height={'70vh'}
            /> <div className={styles.close}>&#x2715;</div>
            </> : <div className={styles.notFound}><div>Video is not found</div><button>Close</button></div>}
        </div> : ''}
    </>)
}

export default Video