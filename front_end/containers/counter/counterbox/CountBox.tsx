import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../../../modules/Reducers'
import { CountHeader } from '../Header'
import { AddButton } from './Add'
import { increment } from '../../../modules/ActionCreater'


type CountProps = {
  name: string,
  currentNumber: number,
  increment: any
}

class Count extends React.Component<CountProps> {
  render() {
    return (
      <div>
        <CountHeader userName={this.props.name} number={this.props.currentNumber} />
        <AddButton incrementAction={this.props.increment}/>
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  name: state.user.name,
  currentNumber: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => {dispatch(increment())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Count)
