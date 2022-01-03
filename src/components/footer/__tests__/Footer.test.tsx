import { create } from "react-test-renderer";
import Footer from "../Footer";

describe('Footer Component', () => {

    it('Footer snapshot test', () => {
        const component = create(<Footer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});