// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled Component
import { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

injectGlobal`
  @font-face {
    font-family: 'Kanit';
    src: url('/static/fonts/Kanit-Light.ttf');
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Kanit';
    font-weight: normal;
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
