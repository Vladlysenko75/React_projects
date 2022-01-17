import {useState} from "react";

import './App.css';
import {Inputs} from "./Components/Inputs";
import {Users} from "./Components/Users";

function App() {

    const [keyWord,setKeyWord] = useState({name:'',userName:'',email:''})
    console.log(keyWord)

    const pushKeyWord = (word) => {
        setKeyWord(word)
    }

  return (
    <div className="App">
      <div className="inputs">
        <Inputs pushKeyWord={pushKeyWord} />
      </div>
      <div className="users">
        <Users keyWord={keyWord}/>
      </div>
    </div>
  );
}

export default App;
