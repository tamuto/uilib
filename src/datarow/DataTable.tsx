import { FC } from 'react'
import styled from '@emotion/styled'
import {
  mediaQuery,
  dataTableBorderColor,
  dataTableHeaderBgColor,
  dataTableHeaderColor,
  dataTableBgColor,
  dataTableColor,
  dataTableAlternativeBgColor,
  dataTableAlternativeColor
} from '../utils/mediaQuery'

const StyledDataTable = styled.div`
& .In4DataHead {
  border-bottom: solid 2px ${dataTableBorderColor};
  background-color: ${dataTableHeaderBgColor};
  color: ${dataTableHeaderColor};
  display: flex;
  flex-direction: row;
  gap: 0 5px;
  font-weight: bold;
}

& .In4DataRow {
  border-bottom: solid 1px ${dataTableBorderColor};
  background-color: ${dataTableBgColor};
  color: ${dataTableColor};
  display: flex;
  flex-direction: row;
  gap: 0 5px;
}

& .In4DataRow:nth-of-type(odd) {
  background-color: ${dataTableAlternativeBgColor};
  color: ${dataTableAlternativeColor};
}

& .In4DataCell {
  padding: 0.5em 1em;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;

  .content {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tooltip {
    display: none;
  }
}

& .In4DataCell.ellipsis:hover {
  .tooltip {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 20px;
    width: max-content;
    z-index: 1;
    padding: 5px;
    border-radius: 6px;
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
  }
}

${({ theme }) => mediaQuery(theme)} {
  & .In4DataHead {
    display: none;
  }

  & .In4DataRow {
    flex-direction: column;
  }
}
`

type DataTableProps = {
  children: React.ReactNode
  className?: string
}

export const DataTable: FC<DataTableProps> = ({ children, className, ...props }) => {
  return (
    <StyledDataTable className={`In4DataTable ${className ?? ''}`} {...props}>
      {children}
    </StyledDataTable>
  )
}
