import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("should render proper h2 tag", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h2>Simple App Form</h2>)).toBeTruthy();
});
