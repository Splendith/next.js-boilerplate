import styled from 'styled-components';
import { darken } from 'polished';

const colors = {
  default: '#999',
  primary: '#338eee',
  pinky: 'pink',
};

const Button = styled.button`
  background: ${props => (props.ghost ? 'none' : colors[props.color])};
  color: ${props => (props.ghost ? colors[props.color] : 'white')};

  border: 1px solid ${props => colors[props.color]};
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    background: ${props => darken(0.1, colors[props.color])};
    border: 1px solid ${props => darken(0.1, colors[props.color])};
    color: white;
  }

  &:focus {
    outline: 0;
  }
`;

Button.defaultProps = {
  color: 'default',
};

export default Button;
