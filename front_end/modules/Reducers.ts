import { Action, LOGIN, INCREMENT, DECREMENT } from './ActionTypes'
import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'


const initialState = {
  userState: {
    name: '',
    isLoggedIn: false
  },
  counterState: [
    {
      number: 0,
      timeStamp: new Date,
      action: null as any
    }
  ]
}

type userReducerType = {
  name: string,
  isLoggedIn: boolean
}

export function userReducer(state = initialState.userState, action: Action): userReducerType {
  switch(action.type) {
    case LOGIN:
      return {
        name: action.name,
        isLoggedIn: !!action.name.trim()
      }
    default:
      return state;
  }
}

export type CounterType = {
  number: number,
  timeStamp: Date,
  action: 'increment' | 'decrement' | null
}

export function counter(state = initialState.counterState, action: Action): Array<CounterType>{
  switch(action.type) {
    case INCREMENT:
      return [...state, {
        number: state[state.length - 1].number += 1,
        timeStamp: new Date,
        action: 'increment'
      }]
    case DECREMENT:
      return [...state, {
        number: state[state.length - 1].number -= 1,
        timeStamp: new Date,
        action: 'decrement'
      }]
    default:
      return state
  }
}

export const rootReducer = (history: History) => combineReducers({
  user: userReducer,
  counter: counter,
  router: connectRouter(history)
})

export type AppState = ReturnType<typeof rootReducer>
