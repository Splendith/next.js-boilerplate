import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { darken } from 'polished';

import { addCount, clearCount } from 'src/actions/counter';

const Box = styled.div`
  padding: 20px;
  background: ${darken(0.04, '#fff')};
`;

class Counter extends Component {
  // eslint-disable-next-line class-methods-use-this
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderContent() {
    const { countPersist } = this.props;
    return <div>Counter (persist): {countPersist}</div>;
  }

  render() {
    const { addCountAction, clearCountAction, count, status } = this.props;
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
        {!status.loaded ? this.renderLoading() : this.renderContent()}
      </Box>
    );
  }
}

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
