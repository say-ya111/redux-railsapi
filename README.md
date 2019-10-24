React+Redux+TypeScript+Railsを使ったカウンターアプリです。
環境は別の方に構築してもらいました。

## 起動前に
### expressインストール
`npm install express`

## rails起動（Docker）
### 初回起動
`docker-compose up`
### 2回目以降
`docker-compose start`
### ログを見る
`docker-compose logs -f`
### Dockerで起動した後、`rails s`でサーバー起動
これで`http://localhost:8080/api`以下でapiを叩けます

## フロントエンド
### webpackビルド
`npm run build`
### フロントエンドサーバー起動
`npm start`

`http://localhost:3001/signin`でサインインページにアクセスできます。

## ルーティング
react-router-domとconnected-react-routerを使ってルーティングしています。
```TypeScript
import * as React from 'react'
import { History } from 'history'
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import SignIn from './containers/Signin'
import Count from './containers/counter/counterBox/CountBox'
import HistoryList from './containers/counter/History'
import AuthRoute from './containers/Auth'

type AppProps = {
  history: History;
}

const App = ({ history }: AppProps) => {
    return(
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <AuthRoute>
            <Route path='/count' component={Count} />
            <Route path='/history' component={HistoryList}></Route>
          </AuthRoute>
        </Switch>
      </ConnectedRouter>
    )
}


export default App

```

# 機能紹介
## サインイン機能
サインインページのView(UI)の部分は`~/front_end/Signin.tsx`で書いています。

```Javascript

import * as React from 'react';
import { connect } from 'react-redux'
import { logInIfFetchUser } from '../modules/ActionCreater'


type SignInProps = {
  logInIfFetchUser: typeof logInIfFetchUser
}
class SignIn extends React.Component<SignInProps> {
  render(){
    let email: any
    let password: any

    return(
      <div>
        <h1>サインイン</h1>
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

export default connect(null,{ logInIfFetchUser })(SignIn)

```

ログインボタンを押すと`logInIfFetchUser`アクションが起こります。
アクションは全て`modules/ActionCreater.ts`で書いています。

```Javascript
// ... 略

export const logInIfFetchUser = (
  email: string,
  password: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  axios.get(`http://localhost:8080/api/user/?email=${email}\&password=${password}`)
    .then((response) => {
      dispatch(logIn(response.data.name))
      console.log(`${email}, ${password}`, response.data)
      dispatch(push('/count'))
    })
}

// ... 略
```

## カウンター機能
AddボタンとReduceボタンを押せば現在のStateの数値が１ずつ変化します。

Addのコード↓
```TypeScript
import * as React from 'react'
import { increment } from '../../../modules/ActionCreater'


type AddButtonProps = {
  incrementAction: typeof increment,
  switchFunction: any
}

export const AddButton: React.SFC<AddButtonProps> = props =>  {
  function increment() {
    props.incrementAction()
  }
  function switchMode() {
    props.switchFunction()
  }
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <span>ADD</span><button onClick={increment}>足す</button>
      {'\n'}
      <button onClick={switchMode}>引き算ボタン</button>
    </div>
  )
}

```

Reduceのコード↓
```TypeScript
import * as React from 'react'


type ReduceButtonProps = {
  decrementAction: any,
  switchFunction: any
}

export const ReduceButton: React.SFC<ReduceButtonProps> = props =>  {
  function decrement() {
    props.decrementAction()
  }
  function switchMode() {
    props.switchFunction()
  }
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <span>REDUCE</span><button onClick={decrement}>引く</button>
      {'\n'}
      <button onClick={switchMode}>足し算ボタン</button>
    </div>
  )
}

```

二つのボタンはStateを切り替えてどちらか一つだけのボタンを表示させるようにしています。
Countページの全体像は`coutainers/counterbox/CounterBox.tsx`を確認して下さい。

## 履歴機能
何時何分にどのボタンを押したかという履歴をモーダルを出現させて表示しています。

```TypeScript
import * as React from 'react';
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import { CounterType } from '../../modules/Reducers'
import { CountHeader } from './Header'
import Logout from '../Logout'

type HistoryListProps = {
  name: string,
  counterState: Array<CounterType>
}

const HistoryList: React.SFC<HistoryListProps> = props => {
  let list = props.counterState.map((item, index) => {
    if(item.action === 'increment') {
      return (
        <p key={index} style={{margin: 0}}>
          {item.timeStamp.getHours()}時{item.timeStamp.getMinutes()}分足したにゃ
        </p>
      )
    } else if(item.action === 'decrement') {
      return (
        <p key={index} style={{margin: 0}}>
          {item.timeStamp.getHours()}時{item.timeStamp.getMinutes()}分引いたにゃ
        </p>
      )
    }
  })
  return(
    <div style={{whiteSpace: 'pre-line'}}>
      <CountHeader userName={props.name} number={props.counterState[props.counterState.length -1].number} />
      <h1>検索履歴一覧</h1>
      <NavLink to='/count'>TOP</NavLink>
      {list}
      {'\n'}
      <Logout />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  name: state.user.name,
  counterState: state.counter
})

export default connect(mapStateToProps)(HistoryList)

```
## アクセス制御
なお、/countと/historyにはアクセス制御があり、ログインしていないとアクセスできないようにしています。
```Javascript
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

```

####メモ
`index.js`内に
```Javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
```
と、
```Javascript
ReactDOM.render(<App />, document.getElementById('app'));
```
でレンダリング(既に記入済み)
