import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
    <h1>
        {props.course}
    </h1>
  )
}

const Part = (props) => {
    return (
    <p>
      {props.parts} {props.exercises}
    </p>
  )
}

const Content = (props) => {
    return (
    <>
      <Part parts={props.parts[0]} exercises={props.exercises[0]} />
      <Part parts={props.parts[1]} exercises={props.exercises[1]} />
      <Part parts={props.parts[2]} exercises={props.exercises[2]} />
    </>
  )
}

const Total = (props) => {
  return (
      <p>
        Number of exercises {props.exercises}
      </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content
        parts={[part1.name, part2.name, part3.name]}
        exercises={[part1.exercises, part2.exercises, part3.exercises]}
      />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
