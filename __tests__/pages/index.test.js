/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import App, { Index } from '~/pages/index';

describe('With Enzyme', () => {
  it('should shows "Hello! Hover me~"', () => {
    const app = shallow(<Index />);

    expect(app
      .find('Header')
      .children()
      .text()).toEqual('Hello! Hover me~');
  });
});

describe('With Snapshot Testing', () => {
  it('shallow snapshot', () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshot = shallowRenderer.render(<Index />);
    expect(snapshot).toMatchSnapshot();
  });
  it('full snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
