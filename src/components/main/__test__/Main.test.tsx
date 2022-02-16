import { create } from "react-test-renderer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from '../Main';
import rootReducer from '../../../redux/reducers';

describe('Main Component', () => {

  const store = createStore(rootReducer)

  it('Main snapshot test', () => {
    const component = create(<Provider store={store}><Main /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});