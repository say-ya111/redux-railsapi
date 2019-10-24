import * as React from 'react'


type CountHeaderProps = {
  userName: string,
  number: number
}

export const CountHeader: React.SFC<CountHeaderProps> = props => {
  return (
    <div>
      <p>count number: {props.number}</p>
      <p>user name: {props.userName}</p>
    </div>
  )
}
