import { create } from "react-test-renderer";
import SearchResults from '../searchPaheFilmList/SearchResults';
import { BrowserRouter as Router } from 'react-router-dom'

describe('SearchResults Component', () => {

  it('SearchResults snapshot test', () => {
    const component = create(<Router><SearchResults /></Router>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});