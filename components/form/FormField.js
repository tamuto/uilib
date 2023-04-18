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

${({ theme }) => mediaQuery(theme)} {
  & .label {
    display: none;
  }
}
`

const CustomTextField = styled(TextField)({
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 6,
    padding: '4px !important'
  }
})

const FormField = forwardRef(function formFieldRef ({ label, type, ...props }, ref) {
  const theme = useTheme()
  const matches = useMediaQuery(mediaQuery(theme))
  const component = useMemo(() => {
    if (type.toLowerCase() === 'text') {
      let opts = {}
      if (matches) {
        opts = {
          label
        }
      }
      return <CustomTextField className='field' fullWidth {...opts} {...props} ref={ref} />
    } else if (type.toLowerCase() === 'password') {
      let opts = {}
      if (matches) {
        opts = {
          label
        }
      }
      return <CustomTextField className='field' fullWidth {...opts} {...props} ref={ref} type='password' />
    }
    return null
  }, [type, matches])

  return (
    <ResponsiveField>
      <div className='label'>{label}</div>
      {component}
    </ResponsiveField>
  )
})

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
}

export default FormField
