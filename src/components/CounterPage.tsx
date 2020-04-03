import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Counter from './Counter';

const Wrapper = styled.div`
  border: 2px solid #eee;
`;

const Box = styled.div`
  padding: 20px;
  background: #fdfdfd;
  text-align: center;
`;

const CounterPage: FunctionComponent = ({ children }) => (
  <Wrapper>
    <Box>{children}</Box>
    <Counter />
  </Wrapper>
);

export default CounterPage;
