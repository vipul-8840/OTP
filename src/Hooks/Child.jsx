import React, { memo } from 'react'

const Child = ({counterTwo,fun}) => {
    console.log("child componenet rendered")
  return (
    <div>
        <h1>Child Component</h1>
    </div>
  )
}

export default memo(Child)
