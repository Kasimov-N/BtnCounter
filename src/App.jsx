import './App.css'
import Button from './BtnCount'
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0)
  function add() {
    setCount(count + 1)
  }
  let [count1, setCount1] = useState(0)
  function add2() {
    setCount1(count1 + 1)
  }
  let [count2, setCount2] = useState(0)
  function minus() {
    setCount2(count2 - 1)
  }
  return (
    <div className="home">
      <Button fn={add} count={count} />
      <Button fn={add2} count={count1} />
      <Button fn={minus} count={count2} />
    </div>
  )
}

export default App
