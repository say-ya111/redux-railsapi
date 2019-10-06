import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App'
import { Provider } from "react-redux";
import { store } from './modules/Store'

class Root extends React.Component {
  render() {
    return(
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
    )
  }
}

import { fetchUser } from './modules/ActionCreater'
store.dispatch(fetchUser('test@kmail.com', 'aaaaa'))


ReactDOM.render(<Root />, document.getElementById('app'));
