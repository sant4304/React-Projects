import React from 'react'

const Washroom = (props) => {
    const {user} =props
  return (
    <div>
      <h1 className='wash'>{user} Wash</h1>
    </div>
  )
}

export default Washroom
