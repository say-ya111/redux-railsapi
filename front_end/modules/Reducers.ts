import { Action, LOGIN } from './ActionTypes'
import { Reducer, combineReducers } from 'redux';

type userReducerState = {
  email: string,
  password: string
}

const initialState = {
  email: 'example.com',
  password: 'password'
}

export const userReducer: Reducer<userReducerState, Action> = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      console.log(action.payload)
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  userReducer
})

export type AppState = ReturnType<typeof rootReducer>
