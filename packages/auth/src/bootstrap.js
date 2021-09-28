import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) history.listen(onNavigate);

  // const App = () => {
  //   return <h1>Marketing</h1>;
  // };

  // console.log('Marketing !!!');

  // el.innerHTML = marketing;

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      // console.log('Container just navigated');
      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

// If we are in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory });
}

// We are running through container and we should export the mount function
export { mount };
