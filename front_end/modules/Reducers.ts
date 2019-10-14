import { Action, LOGIN, INCREMENT, DECREMENT } from './ActionTypes'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

type userReducerState = {
  name: string,
  isLoggedIn: boolean
}

const initialState = {
  userReducer: {
    name: '',
    isLoggedIn: false},
  counter: 0
}

export function userReducer(state = initialState.userReducer, action: Action): userReducerState {
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

export function counter(state = initialState.counter, action: Action): number{
  switch(action.type) {
    case INCREMENT:
      return state += 1
    case DECREMENT:
      return state -= 1
    default:
      return state
  }
}

export type userReducer = typeof userReducer

export const rootReducer = (history: History) => combineReducers({
  user: userReducer,
  counter: counter,
  router: connectRouter(history)
})



export type AppState = ReturnType<typeof rootReducer>
