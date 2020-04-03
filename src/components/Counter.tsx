import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { darken } from 'polished';

import { addCount, clearCount } from '~src/actions/counter';
import { RootState } from '../reducers/_noPersist';

const Box = styled.div`
  padding: 20px;
  background: ${darken(0.04, '#fff')};
`;

const Counter: FunctionComponent = () => {
  const { count, countPersist } = useSelector<RootState, RootState['counter']>(
    state => state.counter,
  );
  const status = useSelector<RootState, RootState['status']>(state => state.status);
  const dispatch = useDispatch();
  const addCountAction = () => dispatch(addCount());
  const clearCountAction = () => dispatch(clearCount());

  const renderLoading = () => {
    return <div>Loading...</div>;
  };
  const renderContent = () => {
    return <div>Counter (persist): {countPersist}</div>;
  };
  return (
    <Box>
      <h5>Redux global state</h5>
      <Button color="primary" onClick={addCountAction}>
        Add count
      </Button>{' '}
      <Button outline onClick={clearCountAction}>
        Clear count
      </Button>
      <br />
      <br />
      <div>Counter: {count}</div>
      {!status.loaded ? renderLoading() : renderContent()}
    </Box>
  );
};

export default Counter;
