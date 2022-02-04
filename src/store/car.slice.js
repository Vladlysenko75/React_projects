import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async (car, {dispatch}) => {
        try {
            const newCar = await carService.createCar(car)
            dispatch(addCar({data: newCar}))
        } catch (e) {

        }
    }
)

export const deleteCarBtn = createAsyncThunk(
    'carSlice/deleteCarBtn',
    async (id, {dispatch}) => {
        try {
            await carService.deleteCarById(id)
            dispatch(deleteCar({id}))
        } catch (e) {

        }
    }
)

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async (car) => {
        try {
            console.log(car)
            await carService.updateCar(car)
        } catch (e) {

        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})
const carReducer = carSlice.reducer;
export const {addCar, deleteCar} = carSlice.actions;

export default carReducer