import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Cart from './Cart';

describe('<Cart />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Cart />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        const tree = renderer.create(<Cart />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});

// need to do:
// Search a folder (ie components)
// iterate over the files in the folder
// Find the names of all Components (ie Cart.js)
// save the NAME of the component to a variable 
// Create a new file ending in .test.js use the variable name. 
//      ie
//      let name = Cart;
//      make new file = name.test.js
// In that file, add the template test code, but the "name" in for the NAMEHERE

        // import renderer from 'react-test-renderer';
        // import ReactDOM from 'react-dom';
        // import Cart from './Cart';

        // describe('<Cart />', () => {
        //     it('renders without crashing', () => {
        //         const div = document.createElement('div');
        //         ReactDOM.render(<Cart />, div);
        //         ReactDOM.unmountComponentAtNode(div);
        //     });
        //     it('renders this UI as expected', () => {
        //         const tree = renderer.create(<Cart />).toJSON();
        //         expect(tree).toMatchSnapshot();
        //     });    
        // });
// 