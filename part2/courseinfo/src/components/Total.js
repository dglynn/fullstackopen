import React from 'react'


const Total = ({ course }) => {
  const total = course.parts.reduce((s, e) => s + e.exercises, 0)
  //console.log("Exercise value part", s, e)
  //console.log(totalExercises)
  return(
    <p><strong>total of {total} exercises</strong></p>
  )
}

export default Total
