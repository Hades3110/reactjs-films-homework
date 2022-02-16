import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { create } from "react-test-renderer";
import { createStore } from 'redux';
import rootReducer from '../../../redux/reducers';
import Header from "../Header";

const store = createStore(rootReducer)

describe('Header Component', () => {

    it('Header snapshot test', () => {
        const component = create(<Router><Provider store={store}><Header /></Provider></Router>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});