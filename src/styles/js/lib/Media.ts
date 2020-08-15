import { css, CSSObject } from 'styled-components';

const sizes: Record<string, number> = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 0,
};

// Iterate through the sizes and create a media template
const mapped = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (args: CSSObject) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(args)};
    }
  `;
  return acc;
}, <any>{});

export default mapped;
