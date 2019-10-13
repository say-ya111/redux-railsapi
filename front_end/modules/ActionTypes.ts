import { logIn, increment } from './ActionCreater'

export const LOGIN = 'LOGIN'
export const INCREMENT = 'INCREMENT'

export type Action = ReturnType<typeof logIn | typeof increment>
