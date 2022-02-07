import {jsonService} from "./axios.service";
import {urls} from "../constants";

export const usersService = {
    getUsers: () => jsonService.get(urls.users).then(value => value.data),
    getPosts: () => jsonService.get(urls.posts).then(value => value.data),
    getComments: () => jsonService.get(urls.comments).then(value => value.data)
}