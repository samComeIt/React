import { useState } from 'react'
import {PropTypes} from 'prop-types'
import './Counter.css'
import CounterButton from './CounterButton';


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