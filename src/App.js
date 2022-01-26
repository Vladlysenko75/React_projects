import {Route,Routes} from 'react-router-dom';
import './App.css';
import {Layout} from "./pages/Layout";
import {Users} from "./pages/users";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route path={'users'} element={<Users/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
