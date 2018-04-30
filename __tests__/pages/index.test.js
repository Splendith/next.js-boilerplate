/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from '~/pages/_app';
import Index from '~/pages/index';

describe('With Enzyme', () => {
  it('should shows "Hello world!"', () => {
    const app = shallow(<Index />);

    expect(app
      .find('Title')
      .children()
      .text()).toEqual('Hello world!');
  });
});

describe('With Snapshot Testing', () => {
  it('shallow snapshot', () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshot = shallowRenderer.render(<Index />);
    expect(snapshot).toMatchSnapshot();
  });
  it('full snapshot', () => {
    const component = renderer.create(<App Component={Index} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
