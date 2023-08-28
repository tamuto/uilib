import { forwardRef, useMemo } from 'react'
import styled from '@emotion/styled'
import { mediaQuery, requiredLabel, formFieldWidth } from '../utils/mediaQuery'

import {
  // FormControlLabel,
  TextField,
  Switch,
  useMediaQuery,
  FormControl,
  FormHelperText,
  FormControlLabel
} from '@mui/material'

const ResponsiveField = styled.div`
display: flex;
align-items: center;

& .label {
  width: ${formFieldWidth};
  text-align: right;
  margin-right: 16px;
}

& .required-label {
  font-size: 0.3em;
  margin-left: 3px;
  color: red;
}

& .field {
}

& .Mui-readOnly {
  background-color: #eeeeee;
}
& .Mui-disabled {
  background-color: #eeeeee;
}

${mediaQuery} {
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

export const FormField = forwardRef(function formFieldRef ({ children, label, nolabel, type, readonly, required, disabled, error, helperText, value, ...props }, ref) {
  const matches = nolabel ?? useMediaQuery(mediaQuery())

  const makeOpts = (lowerType) => {
    let opts = {
      ref,
      type: lowerType,
      className: 'field',
      fullWidth: true,
      disabled,
      error,
      helperText,
      value,
      InputProps: {
        readOnly: readonly
      }
    }
    if (lowerType === 'number') {
      opts.InputProps.inputMode = 'numeric'
    }
    if (lowerType === 'multiline') {
      opts.type = 'text'
      opts.multiline = true
    }
    if (matches) {
      if (required) {
        label = `${label}${requiredLabel()}`
      }
      opts = {
        ...opts,
        label
      }
    }
    return opts
  }

  const buildSwitchField = () => {
    const opts = {
      fullWidth: true,
      className: 'field',
      required,
      disabled,
      error
    }
    props.checked = value
    if (readonly) {
      // onChangeを上書き
      props.checked = value ?? false
      props.onChange = () => {}
    }
    return (
      <FormControl {...opts}>
        {
          matches &&
          <FormControlLabel control={<Switch {...props} />} label={label} labelPlacement='end' />
        }
        {
          !matches &&
          <Switch {...props} />
        }
        {
          helperText &&
          <FormHelperText>{helperText}</FormHelperText>
        }
      </FormControl>
    )
  }
  const buildCustomTextField = (lowerType) => {
    const opts = makeOpts(lowerType)
    return <CustomTextField {...opts} {...props} />
  }
  const buildSelectField = () => {
    const opts = makeOpts('select')
    return (
      <CustomTextField select {...opts} {...props}>
        {children}
      </CustomTextField>
    )
  }

  const component = useMemo(() => {
    const lowerType = type.toLowerCase()
    if (lowerType === 'switch') {
      return buildSwitchField()
    }
    if (lowerType === 'select') {
      return buildSelectField()
    }
    if (['text', 'password', 'number', 'date', 'multiline'].includes(lowerType)) {
      return buildCustomTextField(lowerType)
    }
    return null
  }, [type, matches, error, helperText, disabled, readonly, value, children])

  if (nolabel) {
    return component
  }

  return (
    <ResponsiveField>
      <div className='label'>
        {label}{required && <span className='required-label'>{requiredLabel()}</span>}
      </div>
      {component}
    </ResponsiveField>
  )
})
// FormField.propTypes = {
//   children: PropTypes.node,
//   label: PropTypes.string,
//   nolabel: PropTypes.bool,
//   type: PropTypes.string,
//   value: PropTypes.any,
//   error: PropTypes.bool,
//   helperText: PropTypes.string,
//   disabled: PropTypes.bool,
//   readonly: PropTypes.bool,
//   required: PropTypes.bool
// }
