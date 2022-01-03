import renderer from "react-test-renderer";
import Footer from "../Footer";

describe('Footer Component', () => {

    it('Footer snapshot test', () => {
        const component = renderer.create(<Footer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});