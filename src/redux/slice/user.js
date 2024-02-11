import { createSlice } from "@reduxjs/toolkit"
import { loginUser } from "../api/user";

const initialState = {
    user: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }

    },
    extraReducers(builder){
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    }
});

export const { setUser, setError, setLoading } = userSlice.actions;
export default userSlice.reducer;