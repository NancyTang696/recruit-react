import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {user} from '../../common/types/user'

type userState = {
    authorized: boolean,
    userProfile: user | null
}

const initialState : userState = {
    authorized: false,
    userProfile: {firstName: "Harry", lastName: "Potter"}
}

const userDetails = createSlice({
    name:'userDetails',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<user>) {
            state.userProfile = action.payload;
            state.authorized = false;
        },
        logoutSuccess(state) {
            state = initialState;
        }

    }
})

export const {
    loginSuccess,
    logoutSuccess
} = userDetails.actions

export default userDetails.reducer;