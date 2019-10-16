import * as React from 'react';
import { connect } from 'react-redux'
import { logout } from '../modules/ActionCreater'


type LogoutProps ={
  logout: typeof logout
}
const Logout: React.SFC<LogoutProps> = props => {
  return (
    <button onClick={() => props.logout()}>ログアウト</button>
  )
}


export default connect(null, { logout })(Logout)
