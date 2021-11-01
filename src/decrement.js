import { Link } from 'react-router-dom'


export const Decrement = ({decrement, answer}) => {
    return (<div>
        <Link to="/">Incremnt</Link>
        decrement {answer}
        <button onClick={decrement}>Decrement</button>
    </div>)
}