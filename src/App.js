import {useReducer, useState} from "react";

import './App.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {count1: state.count1 + 1}
        case 'dec':
            return {count1: state.count1 - 1}
        case 'reset':
            return {count1: 0}
        case 'cat':
            return {...state, cats: [...state.cats, action.payload]}
        default:
            throw new Error('Error')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const [catName, setCatName] = useState('');

    return (
        <div className="App">
            <div className="inputs">
                <div>
                    <label>Cats: <input onChange={e => setCatName(e.target.value)}
                                        value={catName} type="text"/></label>
                    <button onClick={() => dispatch({type: 'cat', payload: catName})}>Send Cats</button>
                </div>

            </div>
            Cats:
            {
                state.cats.map(cat => <div>{cat}</div>)
            }
            {/*<div>{state.count1}</div>*/}
            {/*<button onClick={() => dispatch({type: 'inc'})}>Increment</button>*/}
            {/*<button onClick={() => dispatch({type: 'dec'})}>Decrement</button>*/}
            {/*<button onClick={() => dispatch({type: 'reset'})}>RESET</button>*/}
        </div>
    );
}

export default App;
