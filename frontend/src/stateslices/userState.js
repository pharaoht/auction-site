import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated:false,
    user_name: null,
    first_name: null,
    last_name: null,
    email: null,
    isAdmin: false,
    userId: null,
    token: null,
};

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers : {
        login: (state, action) => {
            console.log(action)
            const isadmin = action.payload.user.isAdmin === 0 ? false : true;

            //with redux toolkit you can mutate state like this
            state.isAuthenticated = true;
            state.user_name = action.payload.user.user_name;
            state.first_name = action.payload.user.first_name;
            state.last_name = action.payload.user.last_name;
            state.email = action.payload.user.email;
            state.isAdmin = isadmin;
            state.userId = action.payload.user.id;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('expiryDate', action.payload.expireDate);
            localStorage.setItem('userId', action.payload.userId);

        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.user_name = null;
            state.first_name = null;
            state.last_name = null;
            state.email = null;
            state.isAdmin = false;
            state.userId = null;
            localStorage.removeItem('token');
            localStorage.removeItem('expiryDate');
            localStorage.removeItem('userId');
        },

        autoLogOut: (state) => {

            const milseconds = 60 * 60 * 1000;

            setTimeout(()=>{
                state.isAuthenticated = false;
                state.user_name = null;
                state.first_name = null;
                state.last_name = null;
                state.email = null;
                state.isAdmin = false;
                state.userId = null;
                localStorage.removeItem('token');
                localStorage.removeItem('expiryDate');
                localStorage.removeItem('userId');
            }, milseconds)

        },

        refreshLogIn: (state) => {

        },
    }
});

export const userActions = userSlice.actions;

export default userSlice;