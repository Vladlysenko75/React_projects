import './App.css';
import {Form} from "./components/Forms/Form";
import {Cars} from "./components/Cars/Cars";
import {useState} from "react";

function App() {
    const [carObject, setCarObject] = useState({})

    return (
        <div className="App">
            <div className="form">
                <Form setCarArray={setCarObject}/>
            </div>
            <div className="cars">
                <Cars setCarObject={setCarObject} carArray={carObject}/>
            </div>
        </div>
    );
}

export default App;
