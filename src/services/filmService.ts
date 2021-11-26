// get API
const getResource = (url: string) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => resolve(res.json()))
            .catch(err => reject(err))
    })
}

export const getFilmList = () => {
    return getResource(`${process.env.ARI_BASE}movie/popular${process.env.API_KEY}`)
}

export const getHeadFilm = () => {
    return getResource(`${process.env.ARI_BASE}movie/561=${process.env.API_KEY}`)
}
