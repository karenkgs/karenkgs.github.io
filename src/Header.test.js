import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders header element', () => {
  const header = shallow(<Header />);
  expect(header.find('.App-header').length).toBe(1);
});