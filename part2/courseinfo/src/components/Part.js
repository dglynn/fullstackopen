import React from 'react'

const Part = ({part}) => {
  //console.log("I am the part.js log",props)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

export default Part
