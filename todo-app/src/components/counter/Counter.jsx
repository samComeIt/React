import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'


export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementParentFunction(by) {
        setCount(count + by)
    }

    function decrementParentFunction(by) {
        setCount(count - by)
    }

    return (
        <>
        <span className="totalCount">{count}</span>
        <CounterButton by={1} incrementMethod={incrementParentFunction} decrementMethod={decrementParentFunction}/>
        <CounterButton by={2} incrementMethod={incrementParentFunction} decrementMethod={decrementParentFunction}/>
        <CounterButton incrementMethod={incrementParentFunction} decrementMethod={decrementParentFunction}/>
        </>
    )
}

 function CounterButton({by, incrementMethod, decrementMethod}) {

    // [0,f]
    const [count, setCount] = useState(0);

    console.log(by);

    function incrementCounterFunction() {
        setCount(count + by)
        incrementMethod(by)
    }

    function decrementCounterFunction() {
        setCount(count - by)
        decrementMethod(by)
    }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
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

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
}