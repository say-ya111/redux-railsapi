import * as React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom";


type AuthRouteProps = {
  isLoggedIn: boolean
}

const AuthRoute: React.SFC<AuthRouteProps> = props => {
  return(
    <Route exact path='/count'>
      {props.isLoggedIn ? props.children : <Redirect to='/signin' />}
    </Route>
  )
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps, null)(AuthRoute)
