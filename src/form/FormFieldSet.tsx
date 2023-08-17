import { FC } from 'react'
import styled from '@emotion/styled'
import { mediaQuery, formFieldWidth } from '../utils/mediaQuery'

const ResponsiveField = styled.div`
display: flex;
align-items: center;

& >.label {
  width: ${formFieldWidth};
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

type FormFieldSetProps = {
  children: React.ReactNode
  label?: string
  nolabel?: boolean
}

const FormFieldSet: FC<FormFieldSetProps> = ({ children, label, nolabel, ...props }) => {
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

export default FormFieldSet
