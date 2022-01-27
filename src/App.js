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
        case 'cat':
            return
        default:
            throw new Error('Error')
    }
    return state
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, cats: [], dogs: []});

    return (
        <div className="App">
            <div className="inputs">
                <form>
                    <label>Cats: <input type="text"/></label>
                    <button onClick={() => dispatch({type: 'cat'})}>Send Cats</button>
                    <label>Dogs: <input type="text"/></label>
                    <button>Send Dogs</button>
                </form>

            </div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: 'inc'})}>Increment</button>
            <button onClick={() => dispatch({type: 'dec'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
        </div>
    );
}

export default App;
