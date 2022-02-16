import { create } from "react-test-renderer";
import MovieCredits from '../MovieCredits';

describe('MovieCredits Component', () => {

  it('MovieCredits snapshot test', () => {
    const component = create(<MovieCredits id={0} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});