import { FC } from 'react'

type DataHeadProps = {
  children: React.ReactNode,
  className?: string
}

const DataHead: FC<DataHeadProps> = ({ children, className, ...props }) => {
  return (
    <div className={`In4DataHead ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}

export default DataHead
