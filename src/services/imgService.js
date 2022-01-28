import baseURL, {urls} from "../configs/urls";

export const imgRequestService = {
    cat: () => fetch(`${baseURL}${urls.cat}`)
}