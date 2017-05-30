import React from 'react';
import getDisplayName from '../utils/getDisplayName';

export default (configureStore, preloadedReducers) => (Page) => {
  const configureStoreIfNeeded = (preloadedState) => {
    if (typeof window === 'undefined') {
      return configureStore(preloadedState, preloadedReducers);
    }
    if (!window.store) {
      window.store = configureStore(preloadedState, preloadedReducers);
    } else {
      window.store.replaceReducer(preloadedReducers);
    }
    return window.store;
  };

  class WithStore extends React.Component {
    static displayName = getDisplayName('WithStore', Page);

    static async getInitialProps(ctx) {
      const store = configureStoreIfNeeded();
      const props = Page.getInitialProps && await Page.getInitialProps({ ...ctx, store });
      return {
        ...props,
        preloadedState: store.getState(),
        store,
      };
    }

    constructor(props) {
      super(props);
      this.store = props.store.dispatch ? props.store : configureStoreIfNeeded(props.preloadedState);
    }

    render() {
      const { ...props } = this.props;
      delete props.preloadedState;
      delete props.store;

      return (
        <Page {...props} store={this.store} />
      );
    }
  }

  return WithStore;
};