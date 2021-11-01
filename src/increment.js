import { Link } from 'react-router-dom'

export const Increment = ({increment, answer}) => {
    return (<div>
        <Link to="/decrement">Decrement</Link>
        Increment {answer}
        <button onClick={increment}>Increment</button>
    </div>)
}