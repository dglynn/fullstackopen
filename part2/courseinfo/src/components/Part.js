import React from 'react'

const Part = ({part}) => {
  //console.log("I am part log",part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

export default Part
