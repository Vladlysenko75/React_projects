import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await usersService.getComments();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})

const postReducer = commentSlice.reducer;

export default postReducer;