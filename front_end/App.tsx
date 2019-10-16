import * as React from 'react'
import { History } from 'history'
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import SignIn from './containers/Signin'
import Count from './containers/counter/counterBox/CountBox'
import HistoryList from './containers/counter/History'
import AuthRoute from './containers/Auth'

type AppProps = {
  history: History;
}

const App = ({ history }: AppProps) => {
    return(
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <AuthRoute>
            <Route path='/count' component={Count} />
            <Route path='/history' component={HistoryList}></Route>
          </AuthRoute>
        </Switch>
      </ConnectedRouter>
    )
}


export default App
