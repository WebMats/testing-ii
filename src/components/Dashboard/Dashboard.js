import React from 'react'

const dashboard = (props) => {
  return (
    <div>
      <button onClick={props.clicked} data-testid="submit-btn">Click To Update</button>
    </div>
  )
}

export default dashboard
