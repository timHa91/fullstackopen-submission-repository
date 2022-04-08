import { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  let mostVoted = points[0]
  points.forEach(e => {
      if (mostVoted < e)
        mostVoted = e
    })

  const getRandomInt = () => Math.floor(Math.random() * anecdotes.length)

  let trackGeneratedNumber = 0;
  const randomAnecdote = () => {
    let generatedNumber = getRandomInt();
    // Avoid repeating
    while (generatedNumber === trackGeneratedNumber) {
      generatedNumber = getRandomInt()
    }
    trackGeneratedNumber = generatedNumber;

    setSelected(generatedNumber)
  }

  const setVote = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  return (
    <div>
      <OfTheDay anecdote={anecdotes[selected]} points={points[selected]}/>
      <button onClick={setVote}>vote</button>
      <button onClick={randomAnecdote}>next anecdote</button>
      <MostVotes anecdote={anecdotes[points.indexOf(mostVoted)]} points={mostVoted} />
    </div>
  )
}

const MostVotes = (props) => {
  const header = "Anecdote with most votes"
  if (props.points)
    return (
      <div>
        <h1>{header}</h1>
        <p>{props.anecdote}</p>
        <p>has {props.points} votes</p>
      </div>
    )
  else
    return (
      <div>
        <h1>{header}</h1>
        <p>none</p>
      </div>
    )
}

const OfTheDay = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdote}</p>
      <p>has {props.points} votes</p>
    </div>
  )
}

export default App