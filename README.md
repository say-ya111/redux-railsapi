React+Redux+TypeScript課題の環境構築済レポジトリ

## rails起動（Docker）
### 初回起動
`docker-compose up`
### 2回目以降
`docker-compose start`
### ログを見る
`docker-compose logs -f`

## フロントエンド
### webpackビルド
`npm run build`
### フロントエンドサーバー起動
`npm start`

expressインストール
npm install express

index.js内に
import * as React from 'react';
import * as ReactDOM from 'react-dom';
と、
ReactDOM.render(<App />, document.getElementById('app'));
でレンダリング(既に記入済み
  )
