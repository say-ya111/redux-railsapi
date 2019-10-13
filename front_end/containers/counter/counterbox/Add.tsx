import * as React from 'react'


type AddButtonProps = {
  incrementAction: any
}

export const AddButton: React.SFC<AddButtonProps> = props =>  {
  function increment() {
    props.incrementAction()
  }
  return(
    <div>
      <span>ADD</span><button onClick={increment}>足すにゃ</button>
    </div>
  )
}
