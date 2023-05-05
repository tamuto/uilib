import PropTypes from 'prop-types'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const mediaQuery = theme => theme?.components?.In4UILibs?.breakpoint ?? '@media screen and (max-width: 0px)'

const DataGroup = ({ children, className, ...props }) => {
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
DataGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default DataGroup
