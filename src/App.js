import './App.css';

import {Inputs} from "./Components/Inputs";
import {Users} from "./Components/Users";

function App() {
  return (
    <div className="App">
      <div className="inputs">
        <Inputs/>
      </div>
      <div className="users">
        <Users/>
      </div>
    </div>
  );
}

export default App;
