import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../modules/Reducers'



type CountProps = {
  name: string
}

const CountHeader: React.SFC<CountProps> = props => {
  return (
    <div>
    <p>count number: </p>
    <p>user name: {props.name}</p>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  name: state.user.name
})

export default connect(mapStateToProps)(CountHeader)
