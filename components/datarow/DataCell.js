import PropTypes from 'prop-types'

const DataCell = ({ children, className, ...props }) => {
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
DataCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default DataCell
