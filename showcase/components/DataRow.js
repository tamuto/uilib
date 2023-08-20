import { css } from '@emotion/react'
import { useTheme } from '@mui/material/styles'

import {
  DataTable,
  DataHead,
  DataRow,
  DataCell,
  DataGroup
} from '~/src'

const mediaQuery = theme => theme?.components?.In4UILibs?.breakpoint ?? '@media screen and (max-width: 0px)'

const ShowCase = () => {
  const theme = useTheme()
  const mobile = mediaQuery(theme)

  const columnsCss = css`
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
    ${mobile} {
      & .col1 {
        width: 100%;
        order: 3;
      }
      & .col2 {
        width: 100%;
        order: 0;
      }
      & .col3 {
        width: 100%;
        order: 2;
      }
      & .col4 {
        width: 100%;
        order: 1;
      }
      & .grp1 {
        display: flex;
        flex-direction: row;

        & .col3 {
          font-weight: bold;
        }
      }
    }
  `

  return (
    <DataTable css={columnsCss}>
      <DataHead>
        <DataCell className='col1'>長いタイトル</DataCell>
        <DataCell className='col2'>Head2</DataCell>
        <DataCell className='col3'>Head3</DataCell>
        <DataCell className='col4'>Head4</DataCell>
      </DataHead>
      <DataRow>
        <DataCell className='col1'>長いデータはどうなる？ 改行される？</DataCell>
        <DataCell className='col2'>This is Test.</DataCell>
        <DataGroup className='grp1'>
          <DataCell className='col3'>
            <h1>Cell1-3</h1>
          </DataCell>
          <DataCell className='col4'>Cell1-4</DataCell>
        </DataGroup>
      </DataRow>
      <DataRow>
        <DataCell className='col1'>Cell2-1</DataCell>
        <DataCell className='col2'>Cell2-2</DataCell>
        <DataCell className='col3'>Test Value</DataCell>
        <DataCell className='col4'>Cell2-4</DataCell>
      </DataRow>
      <DataRow>
        <DataCell className='col1'>Cell3-1</DataCell>
        <DataCell className='col2'>Cell3-2</DataCell>
        <DataCell className='col3'>Cell3-3</DataCell>
        <DataCell className='col4'>Cell3-4</DataCell>
      </DataRow>
      <DataRow>
        <DataCell className='col1'>Cell4-1</DataCell>
        <DataCell className='col2'>Cell4-2</DataCell>
        <DataCell className='col3'>Cell4-3</DataCell>
        <DataCell className='col4'>Cell4-4</DataCell>
      </DataRow>
      <DataRow>
        <DataCell className='col1'>
          <div>Cell5-1</div>
          <div>Something Content...</div>
        </DataCell>
        <DataCell className='col2'>Cell5-2</DataCell>
        <DataCell className='col3'>Cell5-3</DataCell>
        <DataCell className='col4'>Cell5-4</DataCell>
      </DataRow>
    </DataTable>
  )
}

export default ShowCase
