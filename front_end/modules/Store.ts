import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import logger from 'redux-logger'
import { rootReducer } from "./Reducers";


export const history = createBrowserHistory()

export const store = createStore(
  rootReducer(history),
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger
  )
)
