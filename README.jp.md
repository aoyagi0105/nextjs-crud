# motivation-Maker-web
[Live Demo](https://spark-motivate.vercel.app/)

motivation-Maker-webは、既存のモバイルアプリサービスの価値をウェブ環境へと拡張し、ユーザーが感銘を受けた「モチベーションの言葉」を、いつでもどこでも再確認・管理できるように設計されたサービスです。

Key Value
 - Cross-Platform Experience: 同一のNestJSバックエンドを共有することで、モバイル（App）とウェブ（Web）間のデータ同期を実現し、シームレスなユーザー体験を提供します。
 - Personalized Archive: 単なる閲覧にとどまらず、ユーザー別のお気に入り機能を通じて、自分だけの「モチベーション・アーカイブ」を構築できます。
 - Global Accessibility: 多言語対応機能により、グローバルユーザーが各自の言語に最適化されたメッセージを受け取れるよう設計しました。

## Features
 - 認証システム: ログインおよび会員登録のUI/UXを提供
 - フレーズ・キュレーション: モチベーションフレーズの閲覧および多言語リアルタイム翻訳支援
 - アーカイブ機能: ユーザーごとのフレーズ保存（お気に入り）および削除機能
 - セッション維持: リロード時もログアウトされないよう、ブラウザストレージを活用したセッション管理

## Tech Stack
Frontend
- Framework: Next.js (App Router)
- Library: React
- Network: Axios
- Language: TypeScript
- Styling: Tailwind CSS

Deployment & Storage
- Frontend Deployment: Vercel
- Persistence: localStorage (ユーザーデータと設定の保存)

## Troubleshooting
1. localStorageによる自動ログアウトの防止
問題: 初期設計ではReduxを使用していましたが、ページのリロード時にインメモリの状態が初期化され、ログインが解除される現象が発生しました。

原因: Reduxはブラウザメモリ上で状態を管理するため、リロード時にデータが揮発します。また、プロジェクトの規模に対して複雑なボイラープレートコードが多く、生産性の低下を招いていました。

解決策: Reduxを完全に排除し、React標準のHookとlocalStorageを直接連動させる構造に改善しました。

成果: * 不要な外部ライブラリの削除によるバンドルサイズの削減

ログイン状態およびトークン管理ロジックの簡소化によるメンテナンス性の向上

リロード時もlocalStorageを通じてユーザーセッションが安定して維持されるよう改善

2. 本番環境でのCORSエラー (Next.js - NestJS 連携)
問題: ローカル環境では正常に動作していたAPI呼び出しが、Vercelデプロイ後に Access-Control-Allow-Origin エラーで遮断されました。

原因: NestJSバックエンドのCORS許可リスト（Origin）に、Vercelが自動生成するドメインが不足していたため。

解決策: バックエンドの環境変数に、正しいVercelのデプロイドメインを追加することで解決しました。

## Technical Decisions
1. 【セキュリティ強化】XSS攻撃防止のための認証構造
課題: Refresh TokenをlocalStorageに保存すると、JavaScriptからアクセスが可能になります。これにより、XSS（クロスサイトスクリプティング）攻撃を受けた際に、認証トークンが奪取されるリスクがありました。

解決策: Refresh Tokenを httpOnly および Secure 属性を適用したCookieに保存する設計に変更しました。また、クライアント側ではなくサーバー側で管理することで、不正なアクセスを防止しました。

戦略: 相対的に露出リスクの低いAccess TokenはlocalStorageに保存して自動ログインを実現し、セキュリティ上重要なRefresh Tokenはサーバー側で厳重に管理する「二重認証構造」を採用しました。


## Screenshot
**ログイン / 会員登録**

<img width="400" height="400" alt="스크린샷 2026-02-26 150114" src="https://github.com/user-attachments/assets/0d3d9008-99ab-489e-b297-1fdde0975a6b" />
<img width="400" height="400" alt="스크린샷 2026-02-26 150123" src="https://github.com/user-attachments/assets/50a4c9e8-4796-4604-a3ce-fc4f567c67ed" />

会員登録画面でID、パスワード、言語などを設定できます


**モチベーション文言画面**

<img width="400" height="400" alt="스크린샷 2026-02-26 145723" src="https://github.com/user-attachments/assets/04130abc-4337-4ec3-970d-a4caea3e2052" />


**言語変更**

<img width="400" height="400" alt="스크린샷 2026-02-26 145735" src="https://github.com/user-attachments/assets/41da0dba-5957-458b-9ada-a6f5e967df12" />

言語変更時にリアルタイム翻訳機能をサポートします


**お気に入り画面**

<img width="400" height="400" alt="스크린샷 2026-02-26 145815" src="https://github.com/user-attachments/assets/d2db9e95-0cb6-4f51-9d7b-b0f29d0be73d" />

ブックマークを登録すると「ブックマーク画面」で文言を見ることができます

## Related Repositories
- Frontend Application: https://github.com/aoyagi0105/motivation-Maker.git
- Backend API: https://github.com/aoyagi0105/motivation-Maker-backend.git


## Environment Variables
プロジェクトを実行するために`.env.local`ファイルには以下の設定が必要です。

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
```

## Getting Started
```bash
npm run dev
```
