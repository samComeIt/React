import { useState } from 'react'
import './Counter.css'

export default function Counter({by}) {

    // [0,f]
    const [count, setCount] = useState(0);

    console.log(by);

    function incrementCounterFunction() {
        setCount(count + by)
    }

    function decrementCounterFunction() {
        setCount(count - by)
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                    onClick={incrementCounterFunction}
                >+{by}</button>
                <button className="counterButton"
                    onClick={decrementCounterFunction}>-{by}</button>
            </div>
        </div>
    )

    // We updated the state => React updated the view
    // A HTML page is represented by DOM
    // Each element in a HTML page is a node in the DOM
    // You need tp update the DOM to update the element
    // However, writing code to update the DOM can be complex and slow

    // => React takes different approach:
    /// Virtual DOM
}