import HeaderNavbar from './HeaderNavbar';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<HeaderNavbar />);
});