/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import ReduxWrapper from '../../components/ReduxWrapper';
import Index from '~pages/index';

beforeAll(async () => {
  await preloadAll();
});

describe('With Enzyme', () => {
  it('should shows "Hello world!"', () => {
    const app = render(
      <ReduxWrapper>
        <Index />
      </ReduxWrapper>,
    );

    expect(app.findByText('Title')).toEqual('Hello world!');
  });
});

// describe('With Snapshot Testing', () => {
//   it('shallow snapshot', () => {
//     const shallowRenderer = new ShallowRenderer();
//     const snapshot = shallowRenderer.render(<Index />);
//     expect(snapshot).toMatchSnapshot();
//   });
//   it('full snapshot', async () => {
//     let component;
//     await act(async () => {
//       component = renderer.create(
//         <ReduxWrapper>
//           <Index />
//         </ReduxWrapper>,
//       );
//     });
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
