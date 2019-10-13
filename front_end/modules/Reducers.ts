import { Action, LOGIN } from './ActionTypes'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

type userReducerState = {
  name: string,
  isLoggedIn: boolean
}

const initialState = {
  name: '',
  isLoggedIn: false
}

export function userReducer(state = initialState, action: Action) : userReducerState {
  switch(action.type) {
    case LOGIN:
      return {
        name: action.name,
        isLoggedIn: true
      }
    default:
      return state;
  }
}

export type userReducer = typeof userReducer

export const rootReducer = (history: History) => combineReducers({
  user: userReducer,
  router: connectRouter(history)
})



export type AppState = ReturnType<typeof rootReducer>
