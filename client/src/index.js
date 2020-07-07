import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './views/App.jsx';
import thunk from 'redux-thunk';
// import initialData from './helpers/getProjects';
import '../src/assets/styles/importer.css';

require('@babel/polyfill');

// const initialData = [],
// const composedEnhancers = compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f
// );

// const store = createStore(rootReducer, initialData, composedEnhancers);

const configureStore = () => {
  const initialState = {};
  const enhancers = [];
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  return { store };
};

// const store = function configureStore(initialData) {
//   return createStore(
//     rootReducer,
//     initialData,
//     compose(
//       applyMiddleware(thunk),
//       window.devToolsExtension ? window.devToolsExtension() : (f) => f
//     )
//   );
// };

const { store } = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

export default configureStore;
