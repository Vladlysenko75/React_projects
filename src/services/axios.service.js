import axios from "axios";

import baseURL from "../configs/urls";

const randomImgRequest = axios.create({baseURL});

export {randomImgRequest};