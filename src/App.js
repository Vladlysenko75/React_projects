import './App.css';
import {Routes, Route} from 'react-router-dom';
import {UsersPage} from "./Pages/UsersPage/UsersPage";
import {PostsPage} from "./Pages/PostsPage/PostsPage";
import {Layout} from "./Components/Layout/Layout";
import {SingleUser} from "./Pages/UsersPage/SingleUser";
import {SinglePost} from "./Pages/PostsPage/SinglePost";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUser/>}/>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePost/>}/>
                    </Route>
                    <Route path={'*'} element={<UsersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
