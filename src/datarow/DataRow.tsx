import { FC } from 'react'

type DataRowProps = {
  children: React.ReactNode,
  className?: string
}

const DataRow: FC<DataRowProps> = ({ children, className, ...props }) => {
  return (
    <div className={`In4DataRow ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}

export default DataRow
