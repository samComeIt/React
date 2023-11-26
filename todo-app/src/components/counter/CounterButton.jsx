import {PropTypes} from 'prop-types'

export default function CounterButton({by, incrementMethod, decrementMethod}) {

    // [0,f]
    // const [count, setCount] = useState(0);

    console.log(by);

    // function incrementCounterFunction() {
    //     incrementMethod(by)
    // }
    // function decrementCounterFunction() {
    //     decrementMethod(by)
    // }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" 
                    onClick={() => incrementMethod(by)}
                >+{by}</button>
                <button className="counterButton"
                    onClick={() => decrementMethod(by)}>-{by}</button>
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