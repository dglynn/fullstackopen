import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({header}) => {
  //console.log(header)
  return (
    <h1>
      {header}
    </h1>
  )
}

const Button = (props) => (
  <button onClick={props.addClick}>
    {props.text}
  </button>
)

const Stats = ({stats}) => {
  //console.log(stats)
  return (
    <h1>
      {stats}
    </h1>
  )
}

const Total = (props) => {
  //console.log(props)
  return (
    <p>
      good {props.good}
      <br />
      neutral {props.neutral}
      <br />
      bad {props.bad}
      <br />
      all {props.good + props.neutral + props.bad}
      <br />
      average {(props.good - props.bad) / (props.good + props.neutral + props.bad)}
      <br />
      positive {props.good / (props.good + props.neutral + props.bad) * 100} %
    </p>
  )
}

const NoFeedback = (props) => {
  return (
    <p>
      No feedback given
    </p>
  )
}

const Statistics = (props) => {
  //console.log(props)
  if (props.good || props.neutral || props.bad > 0) {
    return (
      <>
        <Stats stats={props.stats}/>
        <Total good={props.good} neutral={props.neutral} bad={props.bad} />
      </>
    )
  }
  return (
    <>
      <Stats stats={props.stats}/>
      <NoFeedback />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const header = "give feedback"
  const stats = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={header}/>
      <Button addClick={() => setGood(good + 1)} text="good" />
      <Button addClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button addClick={() => setBad(bad + 1)} text="bad" />
      <Statistics stats={stats} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
