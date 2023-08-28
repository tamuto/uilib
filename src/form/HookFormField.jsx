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
import { mediaQuery, requiredLabel, formFieldWidth } from '../utils/mediaQuery'

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

const makeOpts = (matches, lowerType, label, disabled, readonly, required) => {
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
      label = `${label}${requiredLabel()}`
    }
    opts = {
      ...opts,
      label
    }
  }
  return opts
}

const buildSelectField = (children, matches, label, disabled, readonly, required, field, fieldState, props) => {
  const opts = makeOpts(matches, 'select', label, disabled, readonly, required)
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

const buildCustomTextField = (matches, lowerType, label, disabled, readonly, required, field, fieldState, props) => {
  const opts = makeOpts(matches, lowerType, label, disabled, readonly, required)
  return <CustomTextField
    {...opts}
    {...field}
    error={fieldState.invalid}
    helperText={fieldState.error?.message}
    {...props}
  />
}

const buildSwitchField = (matches, label, disabled, readonly, required, field, fieldState, props) => {
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
    label = `${label}${requiredLabel()}`
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

/**
 * @param {*=} children
 * @param {string} type
 * @param {string} label
 * @param {boolean=} nolabel
 * @param {string} name
 * @param {object} control
 * @param {object=} rules
 * @param {boolean=} disabled
 * @param {boolean=} readonly
 * @param {object=} props
 * @returns
 */
export const HookFormField = ({ children, type, label, nolabel, name, control, rules, disabled, readonly, ...props }) => {
  const matches = nolabel ?? useMediaQuery(mediaQuery())
  const { field, fieldState } = useController({ control, name, rules })
  const required = rules ? 'required' in rules : false

  const buildComponent = () => {
    const lowerType = type.toLowerCase()
    if (lowerType === 'select') {
      return buildSelectField(children, matches, label, disabled, readonly, required, field, fieldState, props)
    }
    if (['text', 'password', 'number', 'date', 'multiline'].includes(lowerType)) {
      return buildCustomTextField(matches, lowerType, label, disabled, readonly, required, field, fieldState, props)
    }
    if (lowerType === 'switch') {
      return buildSwitchField(matches, label, disabled, readonly, required, field, fieldState, props)
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
        {label}{required && <span className='required-label'>{requiredLabel()}</span>}
      </div>
      {component}
    </ResponsiveField>
  )
}
// HookFormField.propTypes = {
//   children: PropTypes.node,
//   type: PropTypes.string,
//   label: PropTypes.string,
//   nolabel: PropTypes.bool,
//   control: PropTypes.object,
//   name: PropTypes.string,
//   rules: PropTypes.object,
//   disabled: PropTypes.bool,
//   readonly: PropTypes.bool
// }
