import * as React from 'react'


type CountProps = {
  userName: string,
  number: number
}

const CountHeader: React.SFC<CountProps> = props => {
  return (
    <div>
    <p>count number: {props.number}</p>
    <p>user name: {props.userName}</p>
    </div>
  )
}

export default CountHeader
