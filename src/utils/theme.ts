
type dataTableOptions = {
  borderColor?: string
  color?: string
  bgColor?: string
  headerColor?: string
  headerBgColor?: string
  alternativeColor?: string
  alternativeBgColor?: string
}

type labelTextOptions = {
  color?: string
  variant?: 'standard' | 'compact'
}

type Options = {
  mediaQuery?: string
  requiredLabel?: string
  formFieldWidth?: string
  dataTable?: dataTableOptions
  labelText?: labelTextOptions
}

export const defaults: Options = {
  mediaQuery: '@media screen and (max-width: 0px)',
  requiredLabel: '(required)',
  formFieldWidth: '220px',
  dataTable: {
    borderColor: 'grey',
    color: 'inherit',
    bgColor: 'inherit',
    headerColor: 'inherit',
    headerBgColor: 'lightgrey',
    alternativeColor: 'inherit',
    alternativeBgColor: 'inherit'
  },
  labelText: {
    color: 'grey',
    variant: 'standard'
  }
}

export const initIn4UILib = (opts: Options): void => {
  Object.assign(defaults, opts)
}
