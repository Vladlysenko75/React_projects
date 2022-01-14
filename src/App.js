import './App.css';
import {Users} from "./components/Users";
import {UserFull} from "./components/UserFull";
import {useState} from "react";
import {Posts} from "./components/Posts";

export default function App() {
    const [userId, setUseId] = useState(null);

    const foo = (id) => {
        setUseId(id)
    }

    return (
        <div className="App">

            <div className="userPosts">
                <div className="usersy">
                    <Users foo={foo}/>
                </div>
                <div className="posts">
                    {
                        userId && <UserFull userId={userId}/>
                    }
                </div>
            </div>
            <div className="comments">
                <Posts />
            </div>
        </div>
    );
}

