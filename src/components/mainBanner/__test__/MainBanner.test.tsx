import { create } from "react-test-renderer";
import MainBanner from '../MainBanner';
import { createStore } from 'redux';
import rootReducer from '../../../redux/reducers';
import { Provider } from 'react-redux';

describe('MainBanner Component', () => {

  const store = createStore(rootReducer)

  it('MainBanner snapshot test', () => {
    const component = create(<Provider store={store}><MainBanner id={1}/></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});