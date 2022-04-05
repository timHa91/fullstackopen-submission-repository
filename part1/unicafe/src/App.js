import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementGood} text={"good"} />
      <Button handleClick={incrementNeutral} text={"neutral"} />
      <Button handleClick={incrementBad} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  let positive = 0;
  let average = 0;
  if(all > 0) {
    positive = (props.good / all) * 100
    average = (props.good - props.bad) / all
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App
