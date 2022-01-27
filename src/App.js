import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {count1: state.count1 + 1}
        case 'dec':
            return {count1: state.count1 - 1}
        case 'reset':
            return {count1: 0}
        default:
            throw new Error('Error')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0});

    return (
        <div className="App">
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type:'inc'})}>Increment</button>
            <button onClick={() => dispatch({type:'dec'})}>Decrement</button>
            <button onClick={() => dispatch({type:'reset'})}>RESET</button>
        </div>
    );
}

export default App;
