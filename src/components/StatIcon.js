import React from "react"

const StatIcon = ({ type, num, color }) => {
  return (
    <div className='stat-icon'>
      <div className="stat" style={{backgroundColor: color}}>
        {num}
      </div>
      {type}
    </div>
  )
}

export default StatIcon
