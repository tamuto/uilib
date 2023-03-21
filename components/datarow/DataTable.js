import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const mediaQuery = theme => theme?.components?.In4UILibs?.breakpoint ?? '@media screen and (max-width: 0px)'

const StyledDataTable = styled.div`
& .In4DataHead {
  border-bottom: solid 2px ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.borderColor ?? 'grey'};
  background-color: ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.headerBgColor ?? 'lightgrey'};
  color: ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.headerColor ?? 'inherit'};
  display: flex;
  flex-direction: row;
  gap: 0 5px;
  font-weight: bold;
}

& .In4DataRow {
  border-bottom: solid 1px ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.borderColor ?? 'grey'};
  background-color: ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.bgColor ?? 'inherit'};
  color: ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.color ?? 'inherit'};
  display: flex;
  flex-direction: row;
  gap: 0 5px;
}

& .In4DataRow:nth-of-type(odd) {
  background-color: ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.alternativeBgColor ?? 'inherit'};
  color: ${({ theme }) => theme?.components?.In4DataTable?.defaultProps?.alternativeColor ?? 'inherit'};
}

& .In4DataCell {
  padding: 0.5em 1em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: auto;
  margin-bottom: auto;
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

const DataTable = ({ children, className, ...props }) => {
  return (
    <StyledDataTable className={`In4DataTable ${className ?? ''}`} {...props}>
      {children}
    </StyledDataTable>
  )
}
DataTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default DataTable
