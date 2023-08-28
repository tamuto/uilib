const mediaQuery = theme => theme?.components?.In4UILibs?.breakpoint ?? '@media screen and (max-width: 0px)'
const requiredLabel = theme => theme?.components?.In4UILibs?.requiredLabel ?? '(required)'
const formFieldWidth = ({ theme }) => theme?.components?.In4FormField?.defaultProps?.width ?? '220px'
const dataTableBorderColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.borderColor ?? 'grey'
const dataTableColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.color ?? 'inherit'
const dataTableBgColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.bgColor ?? 'inherit'
const dataTableHeaderColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.headerColor ?? 'inherit'
const dataTableHeaderBgColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.headerBgColor ?? 'lightgrey'
const dataTableAlternativeColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.alternativeColor ?? 'inherit'
const dataTableAlternativeBgColor = ({ theme }) => theme?.components?.In4DataTable?.defaultProps?.alternativeBgColor ?? 'inherit'
const labelTextColor = ({ theme }) => theme?.components?.In4LabelText?.defaultProps?.textColor ?? 'grey'

export {
  mediaQuery, requiredLabel, formFieldWidth,
  dataTableBorderColor,
  dataTableColor,
  dataTableBgColor,
  dataTableHeaderColor,
  dataTableHeaderBgColor,
  dataTableAlternativeColor,
  dataTableAlternativeBgColor,
  labelTextColor
}
