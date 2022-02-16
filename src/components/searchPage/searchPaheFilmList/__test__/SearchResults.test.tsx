import { create } from "react-test-renderer";
import SearchResults from '../SearchResults';
import { BrowserRouter as Router } from 'react-router-dom'

describe('Footer Component', () => {

  it('Footer snapshot test', () => {
    const component = create(<Router><SearchResults /></Router>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});