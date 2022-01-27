import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const episodeService = {
    episodesPage:(pageNumber) => axiosService.get(`${urls.episodesPage}${pageNumber}`).then(value => value.data),
    episode:(episodeNumber) => axiosService.get(`${urls.episode}/${episodeNumber}`).then(value => value.data)
}