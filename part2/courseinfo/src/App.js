import React from 'react'
import Course from './components/Course'

const App = () => {
  const courses = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 13,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
//console.log("App works......")
//console.log("I am the app.js courses object", courses)
//console.log(courses.map(course => course))

  return (
    <div>
    <h1><strong>Web development curriculum</strong></h1>
    {courses.map((course) =>
      <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App
