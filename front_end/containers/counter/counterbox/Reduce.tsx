import * as React from 'react'


type ReduceButtonProps = {
  decrementAction: any
}

export const ReduceButton: React.SFC<ReduceButtonProps> = props =>  {
  function decrement() {
    props.decrementAction()
  }
  return(
    <div>
      <span>REDUCE</span><button onClick={decrement}>引くにゃ</button>
    </div>
  )
}
