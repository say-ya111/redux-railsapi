import * as React from 'react';
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { /*AppState,*/ CounterType } from '../../modules/Reducers'
import { CountHeader } from './Header'
import Logout from '../Logout'

type HistoryListProps = {
  name: string,
  counterState: Array<CounterType>
}

const HistoryList: React.SFC<HistoryListProps> = props => {
  let list = props.counterState.map((item, index) => {
    if(item.action === 'increment') {
      return (
        <p key={index} style={{margin: 0}}>
          {item.timeStamp.getHours()}時{item.timeStamp.getMinutes()}分足したにゃ
        </p>
      )
    } else if(item.action === 'decrement') {
      return (
        <p key={index} style={{margin: 0}}>
          {item.timeStamp.getHours()}時{item.timeStamp.getMinutes()}分引いたにゃ
        </p>
      )
    }
  })
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <CountHeader userName={props.name} number={props.counterState[props.counterState.length -1].number} />
      <h1>検索履歴一覧</h1>
      <NavLink to='/count'>TOP</NavLink>
      {list}
      {'\n'}
      <Logout />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  name: state.user.name,
  counterState: state.counter
})

export default connect(mapStateToProps)(HistoryList)
