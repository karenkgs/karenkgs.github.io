import InputWithLabel from './InputWithLabel';
import React from 'react';
import { shallow } from 'enzyme';

describe('<InputWithLabel />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      inputName: "days",
      type: "text",
      labelTitle: "arroz"
    };
    wrapper = shallow(<InputWithLabel {...props} />);
  });

  it('renders without crashing', () => {
    shallow(<InputWithLabel />);
  });  

  it('should have a `<input>` element', () => {
    expect(
      wrapper.find('input').length
    ).toBe(1);
  });

  it('should pass type prop to `<input>`', () => {
    expect(
      wrapper.find(`input[type='${props.type}']`).length
    ).toBe(1);
  });

  it('should pass labelTitle prop to `<label>`', () => {
      expect(
        wrapper.find('label').text()
      ).toContain(props.labelTitle);
  });

  it('`<label>` should have a htmlFor for the <input>', () => {
    const label = wrapper.find('label');
    expect(
      label.props()
    ).toHaveProperty('htmlFor', props.inputName);
  });
  
}); 