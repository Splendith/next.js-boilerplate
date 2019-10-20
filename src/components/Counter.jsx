import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { darken } from 'polished';

import { addCount, clearCount } from '~src/actions/counter';

const Box = styled.div`
  padding: 20px;
  background: ${darken(0.04, '#fff')};
`;

const Counter = ({ countPersist, addCountAction, clearCountAction, count, status }) => {
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

Counter.propTypes = {
  status: PropTypes.shape().isRequired,
  count: PropTypes.number.isRequired,
  countPersist: PropTypes.number.isRequired,
  addCountAction: PropTypes.func.isRequired,
  clearCountAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    countPersist: state.counter.countPersist,
    status: state.status,
  };
}

function mapDispatchToProps() {
  return { addCountAction: addCount, clearCountAction: clearCount };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(Counter);
