import Footer from './Footer';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders footer element', () => {
  const footer = shallow(<Footer />);
  expect(footer.find('.App-footer').length).toBe(1);
});

