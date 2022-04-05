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
        <h1>{statisticHeader}</h1>
        <table cellSpacing="0" cellPadding="0" border="0">
          <tbody>
            <tr>
              <td><StatisticLine text="good" /></td>
              <td><StatisticLine value={good} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="neutral" /></td>
              <td><StatisticLine value={neutral} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="bad" /></td>
              <td><StatisticLine value={bad} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="all" /></td>
              <td><StatisticLine value={all} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="average" /></td>
              <td><StatisticLine value={average.toFixed(1)} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="positive" /></td>
              <td><StatisticLine value={`${positive.toFixed(1)} %`} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>{statisticHeader}</h1>
        <StatisticLine text="no feedback given" />
      </div>
    )
  }
}

const StatisticLine = ({ text, value }) => <p style={{margin: 1.5 + 'px'}}>{text} {value}</p>

export default App
