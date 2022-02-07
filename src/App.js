import {Route, Routes} from "react-router-dom"

import './App.css';
import {Form, Cars} from "./components/Cars";
import {UpdateCarForm} from "./components/Cars/UpdateCarForm";
import {Layout} from "./components/Layout/Layout";
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cars'} element={<Cars/>}>
                        <Route path={'create'} element={<Form/>}/>
                        <Route path={'update'} element={<UpdateCarForm/>}/>
                    </Route>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
