import { create } from "react-test-renderer";
import { BrowserRouter as Router } from 'react-router-dom'
import FilmItem from '../FilmItem';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../../../redux/reducers';
import { FilmInfoInterface } from '../../../../../services/filmService';

describe('FilmItem Component', () => {

  const initialState: FilmInfoInterface = {
    id: 0,
    backdrop_path: '',
    page: 1,
    genres: [],
    title: '',
    results: [],
    total_pages: 1,
    total_results: 1,
    vote_average: 1,
    runtime: 1,
    overview: '',
    homepage: '',
    cast: [],
  }

  const store = createStore(rootReducer)

  it('FilmItem snapshot test', () => {
    const component = create(<Provider store={store}>
      <Router>
        <FilmItem
          id={initialState.id}
          title={initialState.title}
          genres={initialState.genres}
          rate={0}
          filmGenres={[]}
          image={''}
          overview={initialState.overview}
        />
      </Router>
    </Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});