# DataTableコンポーネントの使い方

`DataTable`は、Reactアプリケーション内のデータテーブルを作成するためのカスタムコンポーネントです。

## 使用方法

```javascript
import { css } from '@emotion/react'

import DataTable from 'github://tamuto/uilib/components/datarow/DataTable.js'
import DataHead from 'github://tamuto/uilib/components/datarow/DataHead.js'
import DataRow from 'github://tamuto/uilib/components/datarow/DataRow.js'
import DataCell from 'github://tamuto/uilib/components/datarow/DataCell.js'

const dtCss = css`
& .col1 {
  width: 50px;
}
& .col2 {
  width: 100px;
  text-align: right;
}
& .col3 {
  width: 80px;
}
& .col4 {
  width: 300px;
}
`

const MyForm = () => {
  return (
    <DataTable css={css}>
      <DataHead>
        <DataCell className='col1'>Head1</DataCell>
        <DataCell className='col2'>Head2</DataCell>
        <DataCell className='col3'>Head3</DataCell>
        <DataCell className='col4'>Head4</DataCell>
      </DataHead>
      <DataRow>
        <DataCell className='col1'>Cell1-1</DataCell>
        <DataCell className='col2'>Cell1-2</DataCell>
        <DataCell className='col3'>Cell1-3</DataCell>
        <DataCell className='col4'>Cell1-4</DataCell>
      </DataRow>
      <DataRow>
        <DataCell className='col1'>Cell2-1</DataCell>
        <DataCell className='col2'>Cell2-2</DataCell>
        <DataCell className='col3'>Cell2-3</DataCell>
        <DataCell className='col4'>Cell2-4</DataCell>
      </DataRow>
    </DataTable>
  )
}
```

## レスポンシブ設定

* ブレークポイントに該当した場合、テーブル形式からカード形式に表示形式が変わります。

## カスタムテーマ設定

```javascript
In4DataTable: {
  defaultProps: {
    borderColor: 'lightblue',
    headerColor: 'pink',
    headerBgColor: 'purple',
    color: 'blue',
    bgColor: 'grey',
    alternativeColor: 'red',
    alternativeBgColor: 'darkgrey'
  }
}
```
