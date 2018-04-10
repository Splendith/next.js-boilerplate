import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCount, clearCount } from '~/actions/counter';

import { Container } from '~/components/ui';
import Button from 'material-ui/Button';

const ModifyContainer = Container.extend`
  background: #f5f5f5;
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
      <ModifyContainer>
        <h3>Redux global state</h3>
        <Button variant="raised" color="primary" onClick={this.props.addCount}>
          Add count
        </Button>{' '}
        <Button variant="raised" onClick={this.props.clearCount}>
          Clear count
        </Button>
        <br />
        <br />
        <div>Counter: {this.props.count}</div>
        {!this.props.status.loaded ? this.renderLoading() : this.renderContent()}
      </ModifyContainer>
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
