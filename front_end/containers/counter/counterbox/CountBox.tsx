import * as React from 'react'
import { connect } from 'react-redux'
import CountHeader from '../Header'
import { AppState } from '../../../modules/Reducers'

type CountProps = {
  name: string,
  currentNumber: number
}

class Count extends React.Component<CountProps> {
  render() {
    return (
      <CountHeader userName={this.props.name} number={this.props.currentNumber}/>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  name: state.user.name,
  currentNumber: state.counter
})

export default connect(mapStateToProps)(Count)
