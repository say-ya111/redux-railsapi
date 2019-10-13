import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App'
import { store, history } from './modules/Store'



// import { logInIfFetchUser } from './modules/ActionCreater'
// store.dispatch(logInIfFetchUser('test@kmail.com', 'aaaaa'))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('app')
);
