import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    episodesPage1:() => axiosService.get(urls.episodes.page1).then(value => value.data),
    episodesPage2:() => axiosService.get(urls.episodes.page2).then(value => value.data),
    episodesPage3:() => axiosService.get(urls.episodes.page3).then(value => value.data)
}