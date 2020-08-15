import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { darken } from 'polished';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { countState } from '~libs/recoil-atoms';

const Box = styled.div`
  padding: 20px;
  background: ${darken(0.04, '#fff')};
`;

const Counter: React.FC = () => {
  const [count, setCount] = useRecoilState(countState);
  const reset = useResetRecoilState(countState);

  return (
    <Box>
      <h5>Redux global state</h5>
      <Button
        color="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add count
      </Button>{' '}
      <Button outline onClick={reset}>
        Clear count
      </Button>
      <br />
      <br />
      <div>Counter: {count}</div>
    </Box>
  );
};

export default Counter;
