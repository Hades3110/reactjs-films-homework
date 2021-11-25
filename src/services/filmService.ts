class FilmService {

    _apiBase: string = 'https://api.themoviedb.org/3/'
    _apiKey: string = '?api_key=ff147ad56a70e7a476553df853ddbbb5'
    _length: number = 12

    getResource = async (url: string) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return res.json()
    }

    getFilmList = async () => {
        const res = await this.getResource(`${this._apiBase}movie/popular${this._apiKey}`)
        return res.results.slice(0, this._length)
    }

    getHeadFilm = () => {
        return this.getResource(`${this._apiBase}movie/561=${this._apiKey}`)
    }
}

export default FilmService
