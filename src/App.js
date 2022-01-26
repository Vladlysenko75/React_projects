import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "./components/Layout";
import {Episodes} from "./pages/episodes/Episodes";
import {Pages} from "./pages/Pages";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'episodes/page/:pageNumber'} element={<Episodes/>}/>
              <Route path={'pages'} element={<Pages/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
