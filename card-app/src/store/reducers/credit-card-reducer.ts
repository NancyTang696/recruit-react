import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import  creditCard  from '../../common/types/credit-card' 

type creditCardState = {
    registered: boolean,
    cardDetails: creditCard
}

const initialState: creditCardState = {
    registered: false,
    cardDetails: {creditCardNumber: '', CVC: '', expiryDate: new Date() }
}

const creditCardDetails = createSlice({
    name: "creditCardDetails",
    initialState,
    reducers: {
        cardRegistered: (state, action: PayloadAction<creditCard>) => {
            state.cardDetails = action.payload;
            state.registered = true;
        },
        removeCardRegister: (state) =>{
            state = initialState;
        }
    }
})

export const {
    cardRegistered,
    removeCardRegister
} = creditCardDetails.actions

export default creditCardDetails.reducer