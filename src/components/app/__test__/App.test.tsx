import { create } from "react-test-renderer";
import App from '../App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../redux/reducers';

describe('App Component', () => {

  const store = createStore(rootReducer)

  it('App snapshot test', () => {
    const component = create(<Provider store={store}><App /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});