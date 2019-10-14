import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../../modules/Reducers'
import { CountHeader } from '../Header'
import { AddButton } from './Add'
import { ReduceButton } from './Reduce'
import { increment, decrement } from '../../../modules/ActionCreater'


type CountProps = {
  name: string,
  currentNumber: number,
  increment: typeof increment,
  decrement: typeof decrement
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
      <div>
        <CountHeader userName={this.props.name} number={this.props.currentNumber} />
        {renderButton}
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  name: state.user.name,
  currentNumber: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => {dispatch(increment())},
  decrement: () => {dispatch(decrement())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Count)
