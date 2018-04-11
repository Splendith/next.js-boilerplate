import PropTypes from 'prop-types';
import styled from 'styled-components';

import Counter from './Counter';

const Box = styled.div`
  padding: 20px;
  background: #fdfdfd;
  text-align: center;
`;

const Wrapper = styled.div`
  border: 2px solid #eee;
`;

const CounterPage = props => (
  <Wrapper>
    <Box>{props.children}</Box>
    <Counter />
  </Wrapper>
);

CounterPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterPage;
