import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCount, clearCount } from '~/actions/counter';
import Button from '@atlaskit/button';

import styled from 'styled-components';

const StyledButton = styled(Button)`
  padding: 0 40px;
`;

class Counter extends Component {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderContent() {
    return <div>Counter (persist): {this.props.countPersist}</div>;
  }

  render() {
    return (
      <div>
        <br />
        <StyledButton appearance="primary" onClick={this.props.addCount}>
          Add count
        </StyledButton>{' '}
        <StyledButton onClick={this.props.clearCount} className="red-bg">
          Clear count
        </StyledButton>
        <br />
        <br />
        <div>Counter: {this.props.count}</div>
        {!this.props.status.loaded ? this.renderLoading() : this.renderContent()}
      </div>
    );
  }
}

Counter.propTypes = {
  status: PropTypes.shape().isRequired,
  count: PropTypes.number.isRequired,
  countPersist: PropTypes.number.isRequired,
  addCount: PropTypes.func.isRequired,
  clearCount: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    countPersist: state.counter.countPersist,
    status: state.status,
  };
}

function mapDispatchToProps() {
  return { addCount, clearCount };
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter);
