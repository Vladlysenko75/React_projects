import './App.css';
import {Form} from "./components/Forms/Form";
import {Cars} from "./components/Cars/Cars";

function App() {
    return (
        <div className="App">
            <div className="form">
                <Form/>
            </div>
            <div className="cars">
                <Cars/>
            </div>
        </div>
    );
}

export default App;
