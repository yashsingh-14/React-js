import { useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0)
    
    const increase = () => {
        setCount(count+1)

    }
    const decrease = () => {
        setCount(count-1)
    }
         const reset = () => {
        setCount(0)
}
    return <>
    <h1>Count: {count}</h1>
    <button type="button" onClick={increase} >increase </button>
     <button type="button" onClick={reset} >reset </button>
      <button type="button" onClick={decrease} >decrease </button>
    </>
    }