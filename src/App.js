import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "./components/Layout";
import {Episodes} from "./pages/episodes/Episodes";
import {EpisodeInfo} from "./pages/episodes/EpisodeInfo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'page/:pageNumber'} element={<Episodes/>}/>
                    <Route path={'episode/:id'} element={<EpisodeInfo/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
