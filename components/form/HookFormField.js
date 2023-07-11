import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useController } from 'react-hook-form'
import {
  TextField,
  Switch,
  useMediaQuery,
  FormControl,
  FormHelperText,
  FormControlLabel,
  RadioGroup
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

const makeOpts = (matches, theme, lowerType, label, disabled, readonly, required) => {
  let opts = {
    type: lowerType,
    className: 'field',
    fullWidth: true,
    disabled,
    InputProps: {
      readOnly: readonly
    }
  }
  if (lowerType === 'numeric') {
    opts.InputProps.inputMode = 'numeric'
  }
  if (lowerType === 'multiline') {
    opts.type = 'text'
    opts.multiline = true
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
  return opts
}

const buildSelectField = (children, matches, theme, label, disabled, readonly, required, field, fieldState, props) => {
  const opts = makeOpts(matches, theme, 'select', label, disabled, readonly, required)
  return (
    <CustomTextField
      select
      {...opts}
      {...field}
      error={fieldState.invalid}
      helperText={fieldState.error?.message}
      {...props}
    >
      {children}
    </CustomTextField>
  )
}

const buildCustomTextField = (matches, theme, lowerType, label, disabled, readonly, required, field, fieldState, props) => {
  const opts = makeOpts(matches, theme, lowerType, label, disabled, readonly, required)
  return <CustomTextField
    {...opts}
    {...field}
    error={fieldState.invalid}
    helperText={fieldState.error?.message}
    {...props}
  />
}

const buildSwitchField = (matches, theme, label, disabled, readonly, required, field, fieldState, props) => {
  const opts = {
    fullWidth: true,
    className: 'field',
    required,
    disabled,
    error: fieldState.invalid
  }
  if (readonly) {
    props.onChange = () => {}
  }
  if (matches & required) {
    label = `${label}${requiredLabel(theme)}`
  }
  return (
    <FormControl {...opts}>
      {
        matches &&
        <FormControlLabel control={
          <Switch
            {...field}
            checked={field.value}
            {...props}
          />}
          label={label} labelPlacement='end' />
      }
      {
        !matches &&
        <Switch
          {...field}
          checked={field.value}
          {...props}
        />
      }
      {
        fieldState.error &&
        <FormHelperText>{fieldState.error.message}</FormHelperText>
      }
    </FormControl>
  )
}

const buildRadioField = (children, disabled, readonly, required, field, fieldState, props) => {
  const opts = {
    fullWidth: true,
    className: 'field',
    required,
    disabled,
    error: fieldState.invalid
  }
  if (readonly) {
    props.onChange = () => {}
  }
  return (
    <FormControl {...opts}>
      <RadioGroup name={field.name} value={field.value} onChange={field.onChange} {...props}>
        {children}
      </RadioGroup>
      {
        fieldState.error &&
        <FormHelperText>{fieldState.error.message}</FormHelperText>
      }
    </FormControl>
  )
}

const HookFormField = ({ children, type, label, nolabel, name, control, rules, disabled, readonly, ...props }) => {
  const theme = useTheme()
  const matches = nolabel ?? useMediaQuery(mediaQuery(theme))
  const { field, fieldState } = useController({ control, name, rules })
  const required = rules ? 'required' in rules : false

  const buildComponent = () => {
    const lowerType = type.toLowerCase()
    if (lowerType === 'select') {
      return buildSelectField(children, matches, theme, label, disabled, readonly, required, field, fieldState, props)
    }
    if (['text', 'password', 'number', 'date', 'multiline'].includes(lowerType)) {
      return buildCustomTextField(matches, theme, lowerType, label, disabled, readonly, required, field, fieldState, props)
    }
    if (lowerType === 'switch') {
      return buildSwitchField(matches, theme, label, disabled, readonly, required, field, fieldState, props)
    }
    if (lowerType === 'radio') {
      return buildRadioField(children, disabled, readonly, required, field, fieldState, props)
    }
    return null
  }

  const component = buildComponent()

  if (nolabel) {
    return component
  }

  return (
    <ResponsiveField>
      <div className='label'>
        {label}{required && <span className='required-label'>{requiredLabel(theme)}</span>}
      </div>
      {component}
    </ResponsiveField>
  )
}
HookFormField.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  label: PropTypes.string,
  nolabel: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
  rules: PropTypes.object,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool
}

export default HookFormField
