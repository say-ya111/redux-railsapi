import * as React from 'react';
import { connect } from 'react-redux'
// import { AppState } from '../../modules/Reducers'
import { CountHeader } from './Header'

type HistoryListProps = {
  name: string,
  currentNumber: number
}

const HistoryList: React.SFC<HistoryListProps> = props => {
  return(
    <div>
      <CountHeader userName={props.name} number={props.currentNumber} />
      <h1>検索履歴一覧</h1>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  name: state.user.name,
  currentNumber: state.counter
})

export default connect(mapStateToProps)(HistoryList)
