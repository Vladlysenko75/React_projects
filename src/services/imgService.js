import {urls} from "../configs/urls";

import {randomImgRequest} from "./axios.service";

export const imgRequest = {
    cat: () => randomImgRequest.get(urls.cat).then(cat => cat.data)
}