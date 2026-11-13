# Sunny Days Parenting Webサイト

HTML / CSS だけで作ったシンプルなサイトです。`index.html` をダブルクリックするとブラウザで確認できます。

## ファイル構成

| ファイル | 内容 |
|---|---|
| index.html | トップ |
| about.html | わたしについて（プロフィール） |
| service.html | コーチングの内容と料金 |
| voice.html | お客様の声 |
| faq.html | よくある質問 |
| contact.html | 申込・問い合わせ |
| legal.html | 特定商取引法に基づく表記・プライバシーポリシー |
| css/style.css | デザイン（色は先頭の `:root` で一括変更できます） |
| images/ | ロゴ・イラスト・写真 |
| CNAME | 独自ドメイン（sunnydaysparenting.com）の設定 |

## 公開前にやること（チェックリスト）

ファイル内で `TODO` と書かれた箇所が差し替えポイントです。

- [x] サイト名：Sunny Days Parenting（about.html に名前の由来を追加）
- [x] ローマ字表記「MEG HORIME」
- [x] プロフィール写真（`images/profile.jpg`。元写真はサイトの外の `../original-photos/` に保管）
- [x] about.html の「コーチになるまで」の文章（確認済み）
- [x] 3か月コース：税込
- [x] 3か月コース：1回60分・全12回
- [x] キャンセル・返金規定、分割払い（ご相談に応じる）
- [x] 支払い方法：銀行振込
- [ ] 事業用の振込口座を用意
- [x] contact.html：予約ページURL（TimeRex）
- [x] contact.html：お問い合わせフォーム（Web3Forms、送信先は登録したGmail）
- [ ] voice.html：サンプルの声を、許可をもらった本物の感想に差し替え（まだない場合はサンプル部分を削除）
- [x] legal.html：本名・連絡先は「請求があれば開示」、支払期限7日、制定日2026/11/13
- [ ] 独自ドメインのメールができたら legal.html の連絡先に追記
- [ ] SNS共有用の画像（1200×630pxのPNG/JPG）を `images/ogp.jpg` として用意し、各ページに og:image を追加

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成（例：`my-site`、Public）
2. このフォルダの中身をアップロード（またはgitでpush）
3. リポジトリの **Settings → Pages** を開く
4. Source を「Deploy from a branch」、Branch を `main` / `(root)` にして Save
5. 数分後に `https://ユーザー名.github.io/my-site/` で公開されます

## 独自ドメイン（sunnydaysparenting.com）

1. レジストラ（Cloudflare Registrar など）で `sunnydaysparenting.com` を取得
2. DNS を設定
   - A レコード（@）：185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
   - CNAME（www）：`ユーザー名.github.io`
3. Settings → Pages → Custom domain に `sunnydaysparenting.com` を入力し、反映後に「Enforce HTTPS」をオン
4. .jp を使う場合は `CNAME` ファイルの中身を `sunnydaysparenting.jp` に書き換える

## CSS・JSを変更したとき

ブラウザが古いファイルを覚えていて変更が反映されないことがあります。
`css/style.css` や `js/main.js` を変えたら、全ページの `?v=20261113` の日付部分を新しい日付に書き換えてください。
