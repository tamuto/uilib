import { defaults } from './theme'

const mediaQuery = () => defaults.mediaQuery!
const requiredLabel = () => defaults.requiredLabel!
const formFieldWidth = () => defaults.formFieldWidth!
const dataTableBorderColor = () => defaults.dataTable!.borderColor!
const dataTableColor = () => defaults.dataTable!.color!
const dataTableBgColor = () => defaults.dataTable!.bgColor!
const dataTableHeaderColor = () => defaults.dataTable!.headerColor!
const dataTableHeaderBgColor = () => defaults.dataTable!.headerBgColor!
const dataTableAlternativeColor = () => defaults.dataTable!.alternativeColor!
const dataTableAlternativeBgColor = () => defaults.dataTable!.alternativeBgColor!
const labelTextColor = () => defaults.labelText!.color!

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
