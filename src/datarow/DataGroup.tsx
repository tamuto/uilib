import { FC, ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'
import { mediaQuery } from '../utils/mediaQuery'

type DataGroupProps = {
  className?: string,
  children?: ReactNode
}

export const DataGroup: FC<DataGroupProps> = ({ children, className, ...props }) => {
  const matches = useMediaQuery(mediaQuery())

  if (matches) {
    return (
      <div className={`In4DataGroup ${className ?? ''}`} {...props}>
        {children}
      </div>
    )
  }
  return children
}
