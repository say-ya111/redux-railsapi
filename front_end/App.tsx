import * as React from 'react'
import { History } from 'history'
import SignIn from './containers/Signin'
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'

type AppProps = {
  history: History;
}

const App = ({ history }: AppProps) => {
    return(
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Route exact path='/signin' component={SignIn} />
        </BrowserRouter>
      </ConnectedRouter>
    )
}


export default App
