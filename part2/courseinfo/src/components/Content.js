import React from 'react'
import Part from './Part'

const Content = ({course}) => {
  //console.log("I am the content.js log", course)
  return (
    <div>
      {course.parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

export default Content
