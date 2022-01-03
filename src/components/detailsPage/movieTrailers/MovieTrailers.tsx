import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { getFilmVideo } from '../../../services/filmService'
import styles from './movieTrailers.module.scss'

const MovieTrailers = ({ id }: { id: number }) => {
    const [keys, setKeys] = useState<string[]>([])

    useEffect(() => {
        if (id) getFilmVideo(id).then(res => setKeys([res.results[0].key, res.results[1].key]))
    }, [id])


    return (<div className={styles.treiler}>
        {keys.length > 0 ? keys.map((el) => (<div key={el}>
            <ReactPlayer
                className={styles.player}
                url={`https://www.youtube.com/watch?v=${el}`}
                controls={true}
                width={'100%'}
                height={506}
            />
        </div>)) : 'No treiler'}
    </div>)
}

export default MovieTrailers