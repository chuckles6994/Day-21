import { useState } from "react"

export const StateDemo = () => {
    const [count, setCount] = useState(0)

    console.log(useState(0))
  
    return (
        <>
        <h1>State Demo</h1>
        <button onClick = {() => {
            setCount(6)
            console.log (count)
        }}>No. of Clicks: {count}</button>
        </>
    )
}