import { create } from "react-test-renderer";
import MoreLikeThis from "../MoreLikeThis";

describe('MoreLikeThis Component', () => {

    it('MoreLikeThis snapshot test', () => {
        const component = create(<MoreLikeThis />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});