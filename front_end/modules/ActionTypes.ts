import { logIn, increment, decrement } from './ActionCreater'

export const LOGIN = 'LOGIN'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export type Action = ReturnType<typeof logIn | typeof increment | typeof decrement>
