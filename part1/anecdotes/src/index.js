import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = props => <div>{props.anecdotes}</div>

const Vote = props => <div>has {props.votes} votes</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const random = () => Math.floor(Math.random() * anecdotes.length)
  // console.log(selected)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const addVotes = (selected) => {
    const vote = [...votes]
    vote[selected] += 1
    setVotes(vote)
  }
  // console.log(votes)

  return (
    <div>
      <Anecdote anecdotes={props.anecdotes[selected]} />
      <Vote votes={votes[selected]} />
      <Button onClick={() => addVotes(selected)} text="vote" />
      <Button onClick={() => setSelected(random())} text="next anecdote" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
