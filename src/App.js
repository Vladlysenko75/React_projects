import {Routes, Route} from 'react-router-dom';

import './App.css';
import {Layout} from "./Components/Layout/Layout";
import {UsersPage} from "./Pages/UsersPage/Users/UsersPage";
import {PostsPage} from "./Pages/PostsPage/Posts/PostsPage";
import {SingleUser} from "./Pages/UsersPage/Users/SingleUser";
import {SinglePost} from "./Pages/PostsPage/Posts/SinglePost";
import {CommentsSet} from "./Pages/PostsPage/Comments/CommentsSet";
import {UserPosts} from "./Pages/UsersPage/Posts/UserPosts";
import {UsersAlbums} from "./Pages/UsersPage/Albums/UsersAlbums";
import {AlbumPhotos} from "./Pages/UsersPage/Albums/AlbumPhotos";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<SingleUser/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UsersAlbums/>}>
                            <Route path={':albumId/photos'} element={<AlbumPhotos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglePost/>}>
                            <Route path={'comments'} element={<CommentsSet/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<UsersPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
