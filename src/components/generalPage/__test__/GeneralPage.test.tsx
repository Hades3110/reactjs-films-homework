import { create } from "react-test-renderer";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GeneralPage from '../GeneralPage';
import rootReducer from '../../../redux/reducers';

describe('GeneralPage Component', () => {

  const store = createStore(rootReducer)

  it('GeneralPage snapshot test', () => {
    const component = create(<Provider store={store}><GeneralPage /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});