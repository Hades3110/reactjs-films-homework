import { create } from "react-test-renderer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../../redux/reducers';
import FilmsList from '../FilmsList';

describe('FilmsList Component', () => {

  const store = createStore(rootReducer)

  it('FilmsList snapshot test', () => {
    const component = create(<Provider store={store}><FilmsList /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});