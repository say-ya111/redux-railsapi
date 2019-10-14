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


class Count extends React.Component<CountProps> {
  state = {
    mode: 'increment'
  }

  render() {
    let renderButton;
    if(this.state.mode === 'increment') {
      renderButton = <AddButton incrementAction={this.props.increment}/>
    } else {
      renderButton = <ReduceButton decrementAction={this.props.decrement}/>
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
