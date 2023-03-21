import PropTypes from 'prop-types'

const DataHead = ({ children, className, ...props }) => {
  return (
    <div className={`In4DataHead ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}
DataHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default DataHead
