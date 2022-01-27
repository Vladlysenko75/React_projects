import {useReducer, useState} from "react";

import './App.css';
import {useForm} from "react-hook-form";


const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {count1: state.count1 + 1}
        case 'dec':
            return {count1: state.count1 - 1}
        case 'reset':
            return {count1: 0}
        case 'cat': console.log(state)
            return
        default:
            throw new Error('Error')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, cats: [], dogs: []});
    const {register, handleSubmit} = useForm();
    console.log(handleSubmit)
    return (
        <div className="App">
            <div className="inputs">
                <form>
                    <label>Cats: <input {...register('catsInput')} type="text"/></label>
                    <button onClick={() => dispatch({type: 'cat', payload: {}})}>Send Cats</button>
                    <label>Dogs: <input {...register('dogsInput')} type="text"/></label>
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
