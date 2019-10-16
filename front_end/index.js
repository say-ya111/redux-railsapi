import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App'
import { store, history } from './modules/Store'


// **test dispatch actions** //
// import { logInIfFetchUser } from './modules/ActionCreater'
// store.dispatch(logInIfFetchUser('test@kmail.com', 'aaaaa'))

// import { increment } from './modules/ActionCreater'
// store.dispatch(increment())
// store.dispatch(increment())

// import { decrement } from './modules/ActionCreater'
// store.dispatch(decrement())
// store.dispatch(decrement())

// import { logout } from './modules/ActionCreater'
// store.dispatch(logout())




console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('app')
);
