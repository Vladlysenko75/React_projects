import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services";

export const getAllPosts = createAsyncThunk(
    'userSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await usersService.getPosts();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending...';
            state.error = null;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.posts = action.payload;
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        }
    }
})

const postReducer = postSlice.reducer;

export default postReducer;