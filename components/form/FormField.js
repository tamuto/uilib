import { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import {
  TextField,
  useMediaQuery
} from '@mui/material'

import {
  useTheme
} from '@mui/material/styles'

const mediaQuery = theme => theme?.components?.In4UILibs?.breakpoint ?? '@media screen and (max-width: 0px)'
const requiredLabel = theme => theme?.components?.In4UILibs?.requiredLabel ?? '(required)'

const ResponsiveField = styled.div`
display: flex;
align-items: center;

& .label {
  width: ${({ theme }) => theme?.components?.In4FormField?.defaultProps?.width ?? '220px'};
  text-align: right;
  margin-right: 16px;
}

& .field {
}

& .Mui-readOnly {
  background-color: #eeeeee;
}
& .Mui-disabled {
  background-color: #eeeeee;
}

${({ theme }) => mediaQuery(theme)} {
  & .label {
    display: none;
  }
}
`

const CustomTextField = styled(TextField)({
  '& .Mui-focused > fieldset': {
    borderLeftWidth: '6px !important',
    borderLeftStyle: 'solid'
  }
})

const FormField = forwardRef(function formFieldRef ({ children, label, type, readonly, required, ...props }, ref) {
  const { value, error, helperText, disabled } = props
  const theme = useTheme()
  const matches = useMediaQuery(mediaQuery(theme))
  const component = useMemo(() => {
    const lowerType = type.toLowerCase()
    let opts = {
      ref,
      type: lowerType,
      className: 'field',
      fullWidth: true,
      InputProps: {
        readOnly: readonly
      }
    }
    if (matches) {
      if (required) {
        label = `${label}${requiredLabel(theme)}`
      }
      opts = {
        ...opts,
        label
      }
    }
    if (['text', 'password'].includes(lowerType)) {
      return <CustomTextField {...opts} {...props} />
    }
    if (lowerType === 'select') {
      return (
        <CustomTextField select {...opts} {...props}>
          {children}
        </CustomTextField>
      )
    }
    return null
  }, [type, matches, error, helperText, disabled, readonly, value])

  return (
    <ResponsiveField>
      <div className='label'>
        {label}{required && requiredLabel(theme)}
      </div>
      {component}
    </ResponsiveField>
  )
})

FormField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  required: PropTypes.bool
}

export default FormField
