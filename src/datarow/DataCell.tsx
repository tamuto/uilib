import { FC, ReactNode, MouseEvent, useState } from 'react'

type DataCellProps = {
  className?: string,
  children?: ReactNode,
}

type TooltipProps = {
  value: string
}

const Tooltip: FC<TooltipProps> = ({ value }) => {
  return (
    <div className="tooltip">
      <span className="tooltiptext" dangerouslySetInnerHTML={{__html: value}}></span>
    </div>
  )
}

export const DataCell: FC<DataCellProps> = ({ children, className, ...props }) => {
  const [tooltip, setTooltip] = useState<string|null>(null)
  const mouseEnter = (e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget.offsetWidth < e.currentTarget.scrollWidth) {
      setTooltip(e.currentTarget.innerHTML)
    }
  }
  const mouseLeave = () => {
    setTooltip(null)
  }

  return (
    <div
      className={`In4DataCell ${className ?? ''}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...props}
    >
      {children}
      {
        tooltip && <Tooltip value={tooltip} />
      }
    </div>
  )
}
