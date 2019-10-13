import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction } from "redux-thunk"
import { push } from 'connected-react-router'
import { LOGIN, INCREMENT } from './ActionTypes'
import { AppState } from './Reducers'

export function logIn(payload: string) {
  return {
    type: 'LOGIN' as typeof LOGIN,
    name: payload
  }
}


export const logInIfFetchUser = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  axios.get(`http://localhost:8080/api/?email=${email}&password=${password}`)
    .then((response) => {
      dispatch(logIn(response.data[0].name))
      dispatch(push('/count'))
    })
}

export function increment() {
  return {
    type: 'INCREMENT' as  typeof INCREMENT
  }
}
