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
  //console.log(props)
  <button onClick={props.addClick}>{props.text}</button>
)

const StatsHeader = ({stats}) => {
  //console.log(stats)
  return (
    <h1>
      {stats}
    </h1>
  )
}

const Statistic = (props) => {
  //console.log(props)
  if (props.text === "percentage") {
    return (
    <p>
      {props.text} {props.value}%
    </p>
  )
  }
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Statistics = (props) => {
  //console.log(props)
  if (props.good || props.neutral || props.bad > 0) {
    return (
      <>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.good + props.neutral + props.bad} />
        <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
        <Statistic text="percentage" value={props.good / (props.good + props.neutral + props.bad) * 100} />
      </>
    )
  }
  return (
    <p>
      No feedback
    </p>
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
      <StatsHeader stats={stats}/>
      <Statistics good={good} neutral={neutral} bad={bad}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
