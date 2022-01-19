import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const jsonActionService = {
    getAllUsers:() => axiosService.get(urls.users).then(value => value.data),
    getUserById:(id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getAllPosts:() => axiosService.get(urls.posts ).then(value => value.data)
}