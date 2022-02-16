import { create } from "react-test-renderer";
import DetailsPage from '../DetailsPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../redux/reducers';

describe('DetailsPage Component', () => {

  const store = createStore(rootReducer)

  it('DetailsPage snapshot test', () => {
    const component = create(<Provider store={store}><DetailsPage /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});