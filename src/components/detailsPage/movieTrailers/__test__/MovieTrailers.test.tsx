import { create } from "react-test-renderer";
import MovieTrailers from '../MovieTrailers';

describe('MovieTrailers Component', () => {

  it('MovieTrailers snapshot test', () => {
    const component = create(<MovieTrailers id={0} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});