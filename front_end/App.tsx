import * as React from 'react'
import { History } from 'history'
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import SignIn from './containers/Signin'
import CountHeader from './containers/counter/Header'

type AppProps = {
  history: History;
}

const App = ({ history }: AppProps) => {
    return(
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route path='/count' component={CountHeader} />
        </Switch>
      </ConnectedRouter>
    )
}


export default App
