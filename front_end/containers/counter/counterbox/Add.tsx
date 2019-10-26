import * as React from 'react'
import { increment } from '../../../modules/ActionCreater'


type AddButtonProps = {
  incrementAction: typeof increment,
  switchFunction: any
}

export const AddButton: React.SFC<AddButtonProps> = props =>  {
  function increment() {
    props.incrementAction()
  }
  function switchMode() {
    props.switchFunction()
  }
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <span>ADD</span><button onClick={increment}>足す</button>
      {'\n'}
      <button onClick={switchMode}>引き算ボタンを出現させます</button>
    </div>
  )
}
