import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Layout} from "./components/Layout";
import {Episodes} from "./pages/episodes/Episodes";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index path={'episodes/page/:pageNumber'} element={<Episodes/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
