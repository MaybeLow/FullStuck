import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const avg = (props.good - props.bad) / total
  const positive = props.good / total * 100

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={avg} />
          <StatisticLine text="Positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  ) 
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('value now', newValue)
    setGood(good + 1)
  }
  const setToNeutral = newValue => {
    console.log('value now', newValue)
    setNeutral(neutral + 1)
  }
  const setToBad = newValue => {
    console.log('value now', newValue)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setToGood()} text="good" />
      <Button onClick={() => setToNeutral()} text="neutral" />
      <Button onClick={() => setToBad()} text="bad" />

      {
        good + neutral + bad === 0 ? (
          <p>No feedback given</p>
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )
      }
    </div>
  )
}

export default App