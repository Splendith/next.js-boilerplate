// Styled Component
import { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

injectGlobal`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  @font-face {
    font-family: 'Kanit';
    src: url('/static/fonts/Kanit-Light.ttf');
  }
  body {
    font-family: Sans-Serif
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Kanit';
    font-weight: normal;
    margin-top: 0px;
  }
`;

const Global = props => <div>{props.children}</div>;

Global.propTypes = {
  children: PropTypes.node,
};
Global.defaultProps = {
  children: <span />,
};

export default Global;
