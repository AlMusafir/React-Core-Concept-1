import { useState } from "react"

export default function Counter(){

    const [count , setCount] = useState(0)

        const handleCount = () => {
            const newCount = count + 1
            setCount(newCount)
        }

        const handleReduce = () => {
            const newCount = count - 1
            setCount(newCount)
        }

        const handleReset = () => {
            const newCount = 0
            setCount(newCount)
        }

    return (
        <div style={{border:'5px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>Addition</button>

            <button onClick={handleReduce}>Reduce</button>

            <button onClick={handleReset}>Reset</button>
        </div>
    )
}