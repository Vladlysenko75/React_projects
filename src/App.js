import './App.css';
import {Users} from "./components/Users";
import {UserFull} from "./components/UserFull";
import {useState} from "react";
import {Posts} from "./components/Posts";

export default function App() {
    const [userId, setUseId] = useState(null);
    const [postId, setPostId] = useState(null)

    const foo = (id) => {
        setUseId(id)
    }

    const bar = (id) => {
        setPostId(id)
    }

    return (
        <div className="App">

            <div className="userPosts">
                <div className="usersy">
                    <Users foo={foo}/>
                </div>
                <div className="posts">
                    {
                        <UserFull userId={userId} bar={bar}/>
                    }
                </div>
            </div>
            <div className="comments">
                <Posts postId={postId}/>
            </div>
        </div>
    );
}

