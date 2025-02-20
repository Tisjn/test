import { useState } from "react"
export default function BaiTap1() {
  const [name, setName] = useState(0)
  const [text, setText] = useState('')

  function handleChange(e){
    setName(e.target.value)
  }

  function handleClick(){
    setText('Hello ' + name)
  }

  return (
    <>
      <h1>BaiTap1</h1>
      <input onChange={handleChange} type="text"/>
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <h2>{text}</h2>
      <hr />
    </>
  )
}