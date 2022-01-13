import './App.css';
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";

export default function App() {

    return (
        <div className="App">

            <div className="userPosts">
                <div className="usersy">
                    <Users/>
                </div>
                <div className="posts">
                    <Posts/>
                </div>
            </div>
            <div className="comments">
                <Comments/>
            </div>
        </div>
    );
}

