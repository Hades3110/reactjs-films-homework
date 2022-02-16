import { create } from "react-test-renderer";
import FilmsFilter from '../FilmsFilter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../../redux/reducers';

describe('FilmsFilter Component', () => {

  const store = createStore(rootReducer)

  it('FilmsFilter snapshot test', () => {
    const component = create(<Provider store={store}><FilmsFilter /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});