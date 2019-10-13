import * as React from 'react';
import { connect } from 'react-redux'
import { logInIfFetchUser } from '../modules/ActionCreater'
import { AppState } from '../modules/Reducers'


type SignInProps = {
  logInIfFetchUser: any
  name: any
}
class SignIn extends React.Component<SignInProps> {
  render(){
    let email: any
    let password: any

    return(
      <div>
        <h1>サインイン</h1>
        <p>{this.props.name}</p>
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.logInIfFetchUser(email.value, password.value)
        }}>
          <input type='text' ref={node => email = node}/>
          <input type='password' ref={node => password = node}/>
          <button type='submit'>ログイン</button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state: AppState) => ({})

export default connect(mapStateToProps,{ logInIfFetchUser })(SignIn)
