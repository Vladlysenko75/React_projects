import axios from "axios";
import baseURL, {urls} from "../configs/urls";

const randomImgRequest = axios.create(baseURL);

export const imgRequest = {
    cat: randomImgRequest.get(urls.cat).then(cat => cat.data)
}