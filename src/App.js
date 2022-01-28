import {useReducer, useState} from "react";

import './App.css';
import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'cat':
            return {...state, cats: [...state.cats, action.payload]}
        case 'dog':
            return {...state, dogs: [...state.dogs, action.payload]}
        default:
            throw new Error('Error')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});
    const [catName, setCatName] = useState('');
    const [dogName, setDogName] = useState('');

    return (
        <div className="App">
            <div className="inputs">
                <div>
                    <label>Cats: <input onChange={e => setCatName(e.target.value)} type="text"/></label>
                    <button onClick={() => dispatch({type: 'cat', payload: catName})}>Send Cats</button>
                </div>
                <div>
                    <label>Dogs: <input onChange={e => setDogName(e.target.value)} type="text"/></label>
                    <button onClick={() => dispatch({type: 'dog', payload: dogName})}>Send Cats</button>
                </div>
            </div>
            <div className="animals">
                <div className='cats'>
                    <h3>Cats List:</h3>
                    {state.cats.map(cat => <Cats cat={cat}/>)}
                </div>
                <div className="dogs">
                    <h3>Dogs List:</h3>
                    {state.dogs.map(dog => <Dogs dog={dog}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;
