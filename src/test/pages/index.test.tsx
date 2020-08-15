import React from 'react';
import { render } from '../testUtils';

// @ts-ignore
import preloadAll from 'jest-next-dynamic';

import Index from '../../pages/index';

beforeAll(async () => {
  await preloadAll();
});

describe('Index', () => {
  const elem = <Index />;
  it('should shows "Welcome to this website!"', async () => {
    const app = render(elem, {});
    expect(app.getByText('Welcome to this website!')).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const { asFragment } = render(elem, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
