import * as React from 'react'


type ReduceButtonProps = {
  decrementAction: any,
  switchFunction: any
}

export const ReduceButton: React.SFC<ReduceButtonProps> = props =>  {
  function decrement() {
    props.decrementAction()
  }
  function switchMode() {
    props.switchFunction()
  }
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <span>REDUCE</span><button onClick={decrement}>引くにゃ</button>
      {'\n'}
      <button onClick={switchMode}>足し算ボタンを出現させるにゃー</button>
    </div>
  )
}
