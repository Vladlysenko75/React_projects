import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    episodesPage:() => axiosService.get(urls.episodesPage).then(value => value.data)
}