import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const mediaQuery = theme => theme?.components?.In4UILibs?.breakpoint ?? '@media screen and (max-width: 0px)'

const ResponsiveField = styled.div`
display: flex;
align-items: center;

& >.label {
  width: ${({ theme }) => theme?.components?.In4FormField?.defaultProps?.width ?? '220px'};
  text-align: right;
  margin-right: 16px;
  align-self: normal;
  margin-top: 16px;
}

& >.field {
  width: 100%;
  display: grid;
  row-gap: 16px;
}

${({ theme }) => mediaQuery(theme)} {
  & >.label {
    display: none;
  }
}
`

const FormFieldSet = ({ children, label, nolabel, ...props }) => {
  if (nolabel) {
    return (
      <div className='field'>
        {children}
      </div>
    )
  }

  return (
    <ResponsiveField {...props}>
      <div className='label'>
        {label}
      </div>
      <div className='field'>
        {children}
      </div>
    </ResponsiveField>
  )
}
FormFieldSet.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  nolabel: PropTypes.bool
}

export default FormFieldSet
