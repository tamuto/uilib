# FormFieldコンポーネントの使い方

`FormField`は、Reactアプリケーション内のフォームフィールドを作成するためのカスタムコンポーネントです。

## 使用方法

```javascript
import FormField from 'github://tamuto/uilib/components/form/FormField.js'

function MyForm() {
  return (
    <form>
      <FormField label="名前" type="text" name="name" />
      <FormField label="メールアドレス" type="text" name="email" />
    </form>
  )
}
```

`FormField`コンポーネントは、以下のようなプロパティーを受け取ります。
- `label` : フォームフィールドのラベル（文字列）
- `type` : フォームフィールドのタイプ（"text" に限定されます。）
- `name` : フォームフィールドの名前（参照用）

また、`ResponsiveField`というスタイル付きのコンポーネントも含まれており、これを利用してフォームのレスポンシブデザインを調整することができます。

## レスポンシブ設定

* ブレークポイントに該当した場合、ラベルは非表示、`TextField`にラベルが付与されます。

## カスタムテーマ設定

`In4FormField`として、以下の属性がテーマ設定が可能です。
- `width` : ラベル幅を設定します。（デフォルト `220px`）

```javascript
In4FormField: {
    defaultProps: {
        width: '220px'
    }
}
```
