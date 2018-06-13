import App from './App';
import Footer from './Footer';
import Header from './Header';
import HeaderNavbar from './HeaderNavbar';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains Header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toContainReact(<Header />);
});

it('contains Footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toContainReact(<Footer />);
});

it('contains HeaderNavbar', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper).toContainReact(<HeaderNavbar />);
})