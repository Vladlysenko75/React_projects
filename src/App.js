import {Route, Routes} from "react-router-dom"

import './App.css';
import {Form, Cars} from "./components";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Cars/>}>
                    <Route path={'create'} element={<Form/>}/>
                    <Route path={'update'}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
