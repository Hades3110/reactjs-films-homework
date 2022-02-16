import { create } from "react-test-renderer";
import MovieCreditsItem from '../MovieCreditItem';

describe('MovieCreditsItem Component', () => {

  it('MovieCreditsItem snapshot test', () => {
    const component = create(<MovieCreditsItem character={''} gender={0} name={''} profile_path={''} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});