import { FC, ReactNode } from 'react'

type DataCellProps = {
  className?: string,
  children?: ReactNode,
}

const DataCell: FC<DataCellProps> = ({ children, className, ...props }) => {
  // const mouseEnter = (e) => {
  //   console.log(e)
  //   const text = e.target.innerText
  // }
  // onMouseEnter={mouseEnter}

  return (
    <div className={`In4DataCell ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}

export default DataCell
