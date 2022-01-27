import axios from "axios";

import baseURL from "../configs/urls";

const randomImgRequest = axios.create({baseURL, headers: {
        'Origin':'Access-Control-Allow-Origin'
    }});

export {randomImgRequest};