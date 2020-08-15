import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const Providers: React.FC = ({ children }) => (
  <RecoilRoot>{children}</RecoilRoot>
);

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

// re-export everythingyarn
export * from '@testing-library/react';

// override render method
export { customRender as render };
