import { create } from "react-test-renderer";
import RoutePages from '../router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../redux/reducers';

describe('Footer Component', () => {

  const store = createStore(rootReducer)

  it('Footer snapshot test', () => {
    const component = create(<Provider store={store}><RoutePages /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});