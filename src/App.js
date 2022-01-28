import {Route, Routes} from 'react-router-dom';

import {Layout} from "./components/Layout";
import {Episodes} from "./pages/episodes/Episodes";
import {EpisodeInfo} from "./pages/episodes/EpisodeInfo";
import './App.css';
import {Home} from "./pages/episodes/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'page/:pageNumber'} element={<Episodes/>}/>
                    <Route path={'episode/:id'} element={<EpisodeInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
