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

// need to do: NPM INSTALL renderer