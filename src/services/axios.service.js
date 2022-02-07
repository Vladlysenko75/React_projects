import axios from "axios";
import {baseCar, baseJSON} from "../constants";

export const axiosService = axios.create({baseURL: baseCar});
export const jsonService = axios.create({baseURL: baseJSON});
