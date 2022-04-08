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

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  let positive = 0;
  let average = 0;
  const statisticHeader = "statistics"

  if (all > 0) {
    positive = (good / all) * 100
    average = (good - bad) / all

    return (
      <div>
        <h3>{statisticHeader}</h3>
        <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average.toFixed(1)} />
          <StatisticLine text='positive' value={positive.toFixed(1) + '%'} />
        </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <h3>{statisticHeader}</h3>
        <StatisticLine text="no feedback given" />
      </div>
    )
  }
}

const StatisticLine = ({ text, value }) => 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

export default App
