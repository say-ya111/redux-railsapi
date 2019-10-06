import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction } from "redux-thunk"
import { LOGIN } from './ActionTypes'
import { AppState } from './Reducers'

export function logIn(payload: any) {
  return {
    type: 'LOGIN' as typeof LOGIN,
    payload
  }
}


export const fetchUser = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  axios.get(`http://localhost:8080/api/?email=${email}&password=${password}`)
    .then((response) => {
      dispatch(logIn(response))
    })
}
