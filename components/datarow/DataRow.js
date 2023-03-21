import PropTypes from 'prop-types'

const DataRow = ({ children, className, ...props }) => {
  return (
    <div className={`In4DataRow ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}
DataRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default DataRow
