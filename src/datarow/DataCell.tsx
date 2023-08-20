import { FC, ReactNode, useEffect, useRef } from 'react'

type DataCellProps = {
  className?: string,
  children?: ReactNode,
}

type TooltipProps = {
  children: ReactNode
}

const Tooltip: FC<TooltipProps> = ({ children }) => (
  <div className="tooltip">{children}</div>
)

export const DataCell: FC<DataCellProps> = ({ children, className, ...props }) => {
  const contentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      if (contentRef.current.offsetWidth < contentRef.current.scrollWidth) {
        contentRef.current.parentElement!.classList.add('ellipsis')
      }
    }
  }, [])

  return (
    <div className={`In4DataCell ${className ?? ''}`} {...props}>
      <span ref={contentRef} className='content'>
        {children}
      </span>
      {
        children && <Tooltip>{children}</Tooltip>
      }
    </div>
  )
}
