import { logIn, logout, increment, decrement } from './ActionCreater'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export type Action = ReturnType<typeof logIn | typeof increment | typeof decrement | typeof logout>
