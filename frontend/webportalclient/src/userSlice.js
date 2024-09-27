import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    userId: 0,
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.userId = action.payload.userId;
            state.loggedIn = true;
        },
        clearUser: (state) => {
            state.name = '';
            state.userId = 0;
            state.loggedIn = false;
        },
    },
});

// Allows these actions to be dispatched throughout the app
export const { setUser, clearUser } = userSlice.actions;

// Allows this reducer to be added to the store
export default userSlice.reducer;