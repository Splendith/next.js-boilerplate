import { MakeStore } from 'next-redux-wrapper';
import createStoreFromServer from './serverStore';
import createStoreFromClient from './clientStore.withPersist';

const makeStore: MakeStore = (initialState, { isServer }) => {
  if (isServer) {
    return createStoreFromServer(initialState);
  }
  return createStoreFromClient(initialState);
};

export default makeStore;
