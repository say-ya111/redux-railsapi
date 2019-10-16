import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { /*AppState,*/ CounterType } from '../../../modules/Reducers'
import { CountHeader } from '../Header'
import { AddButton } from './Add'
import Logout from '../../Logout'
import { ReduceButton } from './Reduce'
import { increment, decrement, logout } from '../../../modules/ActionCreater'


type CountProps = {
  name: string,
  counterState: Array<CounterType>,
  path: string
  increment: typeof increment,
  decrement: typeof decrement,
  logout: typeof logout
}

type CountState = {
  mode: 'increment' | 'decrement'
}

class Count extends React.Component<CountProps, CountState> {
  constructor(props: CountProps) {
    super(props)
    this.state = {
      mode: 'increment'
    }
  }

  switchMode() {
    if(this.state.mode === 'increment') {
      this.setState({mode: 'decrement'})
    } else {
      this.setState({mode: 'increment'})
    }
  }

  render() {
    let renderButton;

    if(this.state.mode === 'increment') {
      renderButton = <AddButton incrementAction={this.props.increment} switchFunction={() => this.switchMode()} />
    } else {
      renderButton = <ReduceButton decrementAction={this.props.decrement} switchFunction={() => this.switchMode()} />
    }

    return (
      <div style={{whiteSpace: 'pre-line'}}>
        <CountHeader userName={this.props.name} number={this.props.counterState[this.props.counterState.length - 1].number} />
        {renderButton}
        {'\n'}
        <NavLink to='/history'>検索履歴一覧</NavLink>
        {'\n'}
        <Logout />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  name: state.user.name,
  counterState: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => {dispatch(increment())},
  decrement: () => {dispatch(decrement())},
  logout: () => {dispatch(logout())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Count)
