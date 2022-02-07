import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const carService = {
    getAll:() => axiosService.get(urls.cars).then(value => value.data),
    createCar: (car) => axiosService.post(urls.cars, car).then(value => value.data),
    deleteCarById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateCar: (car) => axiosService.patch(`${urls.cars}/${car.id}`,car).then(value => value.data)
}