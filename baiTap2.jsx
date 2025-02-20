import { useState } from "react"

export default function BaiTap2() {

    const [a, setA] = useState('')
    const [b, setB] = useState('')

    const [result, setResult] = useState(0)

    function handleClick() {
      setResult(parseInt(a) + parseInt(b));
    }

    return (
        <div>
            <h1>BaiTap2</h1>
            <div style={{  }}>
                <input onChange={(e) => {setA(e.target.value)}} />
                <br />
                <input onChange={(e) => {setB(e.target.value)}}/>
            </div>
            <button onClick={handleClick}>Calculator</button>
            <br/>
            <h2>{result}</h2>
            <hr />
        </div>
    )
}