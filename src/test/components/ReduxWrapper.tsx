import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import { Store } from 'redux';
import initStore from '~src/store/';
import { RootState } from '~/src/reducers/_noPersist';

type ReduxWrapperProps = {
  store: Store<RootState>;
};

const ReduxWrapper: FunctionComponent<ReduxWrapperProps> = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
);

export default withRedux(initStore)(ReduxWrapper);
