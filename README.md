# UI Library

UIライブラリのプロジェクトです。
`infodb-cli`を利用している場合には、以下の方法でUIライブラリが用意しているコンポーネントを利用できます。

```
import DataTable from 'github://tamuto/uilib/components/datarow/DataTable.js'

const MyApp = () => <DataTable />
```

# コンポーネント一覧

| カテゴリ | コンポーネント名                         | 説明                           |
| -------- | ---------------------------------------- | ------------------------------ |
| backdrop | Spinner                                  |                                |
| datarow  | [DataTable](./docs/datarow/DataTable.md) |                                |
|          | DataHeader                               |                                |
|          | DataRow                                  |                                |
|          | DataCell                                 |                                |
| form     | FormBar                                  |                                |
|          | [FormField](./docs/form/FormField.md)    | 入力フィールド用コンポーネント |
|          | Spacer                                   |                                |
| heads    | RoundHead                                |                                |
|          | UBGradHead                               |                                |
| misc     | ScrollTop                                |                                |
| unsplash | Unsplash                                 |                                |

# 内部ルール

## コンポーネントクラス名

* 各コンポーネントのクラス名は、`In4`のプリフィックスを持つ。
  * `In4FormField`など。
* MaterialUIのThemeProviderを使ってテーマ設定をすることも可能。

## カスタマイズ

* レスポンシブ向けブレークポイントの設定

```javascript
components: {
    In4UILibs: {
        breakpoint: '@media screen and (max-width: 768px)'
    }
}
```
