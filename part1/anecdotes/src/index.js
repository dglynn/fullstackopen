import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({header, anecdotes, votes}) => {
  return (
    <>
      <h1>
        {header}
      </h1>
      <p>
        {anecdotes}<br />
        has {votes} votes
      </p>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const MostVotes = ({header, votes, anecdotes}) => {
  const mostVotes = Math.max(...votes) //get the anecdote with most votes in the array
  const voteCount = votes.indexOf(mostVotes) //and gets its index
  //console.log(mostVotes, voteCount)
  return (
    <>
      <h1>
        {header}
      </h1>
      { mostVotes > 0
        ? <p>{anecdotes[voteCount]}<br />
        has {votes[voteCount]} votes</p>
        : <p>No anecdote has been voted on yet.</p>
      }
    </>
  )
}

const App = (props) => {
  const anecdoteHeader = "Anecdote of the day"
  const mostVotesHeader = "Anecdote with most votes"
  const [selected, setSelected] = useState(0)
  //let random = Math.floor(Math.random()*(max-min+1)+min);
  const random = () => {
    const rndNumber = Math.floor(Math.random() * (anecdotes.length - 1))
    // console.log("random function return number is ", rndNumber)
    if (selected !== rndNumber){
      // console.log(selected, "was different to ", rndNumber)
      return rndNumber
    }else {
      // console.log(selected, "was the same as ", rndNumber, "lets generate a new number")
      return random()
    }
  }

  //console.log("Random number is ", selected)
  const [votes, setVotes] = useState(new Array(6).fill(0)) //create a zero filled array
  const addVotes = (selected) => {
    const vote = [...votes] // copy the array so we can
    vote[selected] += 1  //add our new votes to it
    setVotes(vote)
  }
  //console.log(votes)

  return (
    <div>
      <Anecdote header={anecdoteHeader} anecdotes={props.anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={() => addVotes(selected)} text="vote" />
      <Button onClick={() => setSelected(random())} text="next anecdote" />
      <MostVotes header={mostVotesHeader} anecdotes={anecdotes} votes={votes} />

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

ReactDOM.render(<App anecdotes={anecdotes} />,document.getElementById('root'))
