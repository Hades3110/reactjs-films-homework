import { create } from "react-test-renderer";
import Video from '../Video';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../redux/reducers';

describe('Video Component', () => {

  const store = createStore(rootReducer)

  it('Video snapshot test', () => {
    const component = create(<Provider store={store}><Video /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});