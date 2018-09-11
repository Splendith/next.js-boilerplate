import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initStore from '@/store/';

const ReduxWrapper = ({ store, children }) => <Provider store={store}>{children}</Provider>;

ReduxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.shape(),
};

ReduxWrapper.defaultProps = {
  store: undefined,
};

export default withRedux(initStore)(ReduxWrapper);
