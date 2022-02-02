import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";



const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCar: () => {
        }
    }
})
const carReducer = carSlice.reducer;
export const {addCar, deleteCar} = carSlice.actions;

export default carReducer