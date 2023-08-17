import { FC, ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { mediaQuery } from '../utils/mediaQuery'

type DataGroupProps = {
  className?: string,
  children?: ReactNode
}

const DataGroup: FC<DataGroupProps> = ({ children, className, ...props }) => {
  const theme = useTheme()
  const matches = useMediaQuery(mediaQuery(theme))

  if (matches) {
    return (
      <div className={`In4DataGroup ${className ?? ''}`} {...props}>
        {children}
      </div>
    )
  }
  return children
}

export default DataGroup
